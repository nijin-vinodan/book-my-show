import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { ILocation, IMovie } from '../types';

const HomePage: React.FC = () => {
    const [locations, setLocations] = useState<ILocation[]>([]);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchLocations();
        const stored = localStorage.getItem('user');
        if (stored) {
            setUser(JSON.parse(stored).user);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('queueToken');
        setUser(null);
        navigate('/login');
    };

    useEffect(() => {
        if (selectedLocation) {
            fetchMovies(selectedLocation);
        }
    }, [selectedLocation]);

    const fetchLocations = async () => {
        try {
            const res = await api.get('/catalog/locations');
            setLocations(res.data);

            const savedLocation = localStorage.getItem('selectedLocationId');
            const matchingLocation = res.data.find((l: ILocation) => l._id === savedLocation);

            if (matchingLocation) {
                setSelectedLocation(matchingLocation._id);
            } else if (res.data.length > 0) {
                setSelectedLocation(res.data[0]._id);
            }
        } catch (e) { console.error(e); }
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocationId = e.target.value;
        setSelectedLocation(newLocationId);
        localStorage.setItem('selectedLocationId', newLocationId);
    };

    const fetchMovies = async (locId?: string) => {
        try {
            const url = locId ? `/catalog/movies?locationId=${locId}` : '/catalog/movies';
            const res = await api.get(url);
            setMovies(res.data);
        } catch (e) { console.error(e); }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-6">
                    <h1 className="text-2xl font-extrabold tracking-wide text-red-500">BookMyShow</h1>
                    <div className="relative">
                        <select
                            className="bg-gray-700 text-white p-2 rounded focus:outline-none"
                            value={selectedLocation}
                            onChange={handleLocationChange}
                        >
                            {locations.map(loc => (
                                <option key={loc._id} value={loc._id}>{loc.city}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex items-center">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium">Hi, {user.name}</span>
                            <button onClick={handleLogout} className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600">Logout</button>
                        </div>
                    ) : (
                        <button onClick={() => navigate('/login')} className="bg-red-500 px-4 py-1 rounded text-sm hover:bg-red-600">Sign In</button>
                    )}
                    <button onClick={() => navigate('/admin')} className="ml-4 text-xs text-gray-400">Admin</button>
                </div>
            </header>

            {/* Movies Grid */}
            <main className="container mx-auto p-6">
                <h2 className="text-xl font-bold mb-6 text-gray-800">Recommended Movies</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {movies.map(movie => (
                        <div
                            key={movie._id}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer"
                            onClick={() => navigate(`/movie/${movie._id}?locationId=${selectedLocation}`)}
                        >
                            <img src={movie.posterUrl} alt={movie.title} className="w-full h-80 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg truncate">{movie.title}</h3>
                                <p className="text-gray-500 text-sm">{movie.genre.join('/')}</p>
                                <p className="text-xs text-gray-400 mt-1">{movie.language}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HomePage;
