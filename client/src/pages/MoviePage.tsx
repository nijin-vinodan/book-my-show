import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { IMovie, IShow } from '../types';

const MoviePage: React.FC = () => {
    const { id } = useParams();
    // Using simple search params read
    const query = new URLSearchParams(window.location.search);
    const locationId = query.get('locationId');

    const [movie, setMovie] = useState<IMovie | null>(null);
    const [shows, setShows] = useState<IShow[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [dates, setDates] = useState<Date[]>([]);
    const navigate = useNavigate();

    // Initial Load: Fetch Movie & All Shows
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Get Movie Details
                const movieRes = await api.get(`/catalog/movies`);
                const found = movieRes.data.find((m: IMovie) => m._id === id);
                setMovie(found);

                // 2. Get ALL Shows for this movie (no date filter)
                let url = `/catalog/shows?movieId=${id}`;
                if (locationId) url += `&locationId=${locationId}`;
                const showsRes = await api.get(url);
                const allShows = showsRes.data as IShow[];

                // 3. Extract Unique Dates from Shows
                const uniqueDates = new Set<string>();
                allShows.forEach(s => {
                    const dateStr = new Date(s.startTime).toDateString();
                    uniqueDates.add(dateStr);
                });

                // Convert back to Date objects and sort
                const sortedDates = Array.from(uniqueDates).map(d => new Date(d)).sort((a, b) => a.getTime() - b.getTime());
                setDates(sortedDates);

                // Select first date if available
                if (sortedDates.length > 0 && !selectedDate) {
                    setSelectedDate(sortedDates[0]);
                } else if (sortedDates.length > 0 && selectedDate) {
                    // Check if current selectedDate is valid
                    const exists = sortedDates.some(d => d.toDateString() === selectedDate.toDateString());
                    if (!exists) setSelectedDate(sortedDates[0]);
                }

                setShows(allShows); // Store ALL shows
            } catch (e) {
                console.error(e);
            }
        };
        if (id) fetchData();
    }, [id, locationId]); // Only run on mount or ID change

    // Filter shows for display based on selectedDate
    const displayedShows = shows.filter(s => {
        if (!selectedDate) return false;
        return new Date(s.startTime).toDateString() === selectedDate.toDateString();
    });

    if (!movie) return <div>Loading...</div>;

    // Group shows by Theater
    const showsByTheater: Record<string, IShow[]> = {};
    displayedShows.forEach(show => {
        const tName = show.theaterId.name;
        if (!showsByTheater[tName]) showsByTheater[tName] = [];
        showsByTheater[tName].push(show);
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-gray-800 text-white p-4">
                <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white">&larr; Back</button>
            </header>

            {/* Hero */}
            <div className="bg-black text-white p-10 flex gap-8">
                <img src={movie.posterUrl} className="w-64 rounded-lg shadow-2xl" alt={movie.title} />
                <div>
                    <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
                    <div className="text-gray-400 mb-4">{movie.language} • {movie.genre.join(', ')}</div>
                    <p className="max-w-2xl">{movie.description}</p>
                </div>
            </div>

            {/* Shows */}
            <div className="container mx-auto p-6 max-w-4xl">
                {/* Date Selector */}
                <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                    {dates.length === 0 && <p className="text-gray-500">No dates available</p>}
                    {dates.map((date, idx) => {
                        const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                        return (
                            <button
                                key={idx}
                                onClick={() => setSelectedDate(date)}
                                className={`flex flex-col items-center min-w-[60px] p-2 rounded cursor-pointer transition ${isSelected ? 'bg-red-500 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
                            >
                                <span className="text-xs uppercase">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                <span className="font-bold text-lg">{date.getDate()}</span>
                                <span className="text-xs">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                            </button>
                        );
                    })}
                </div>

                <h2 className="text-xl font-bold mb-4">Available Shows</h2>
                {displayedShows.length === 0 && <p>No shows available.</p>}

                {Object.entries(showsByTheater).map(([theaterName, theaterShows]) => (
                    <div key={theaterName} className="bg-white p-4 rounded shadow mb-4">
                        <h3 className="font-bold text-gray-700 mb-2 border-b pb-2">{theaterName}</h3>
                        <div className="flex gap-4">
                            {theaterShows.map(show => (
                                <div key={show._id} className="flex flex-col items-center">
                                    <button
                                        onClick={() => navigate(`/book/${show._id}`)}
                                        className="border border-green-500 text-green-600 px-6 py-2 rounded text-sm hover:bg-green-500 hover:text-white transition"
                                    >
                                        {new Date(show.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </button>
                                    <span className="text-xs text-gray-500 mt-1">{(show.screenId as any).name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviePage;
