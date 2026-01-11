import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { IShow, IScreen } from '../types';

interface Seat {
    row: string;
    number: string;
    price: number;
    type: string;
}

const SeatSelectionPage: React.FC = () => {
    const { showId } = useParams();
    const navigate = useNavigate();
    const [show, setShow] = useState<IShow | null>(null);
    const [layout, setLayout] = useState<IScreen['seatLayout']>([]);
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

    useEffect(() => {
        setSelectedSeats([]); // Reset selection on change
        setLayout([]); // Reset layout to force loading state
        setShow(null); // Reset show details
        fetchSeatData();
        // Poll every 5s for updates (simple real-time)
        const interval = setInterval(fetchSeatData, 5000);
        return () => clearInterval(interval);
    }, [showId]);

    const fetchSeatData = async () => {
        try {
            const res = await api.get(`/booking/show-seats/${showId}`);
            setShow(res.data.show);
            setLayout(res.data.seatLayout);
        } catch (e) { console.error(e); }
    };

    const handleSeatClick = (rowLabel: string, seat: any) => {
        if (seat.status !== 'AVAILABLE') return;

        const isSelected = selectedSeats.some(s => s.row === rowLabel && s.number === seat.number);
        if (isSelected) {
            setSelectedSeats(prev => prev.filter(s => !(s.row === rowLabel && s.number === seat.number)));
        } else {
            // Price logic could be robust
            const price = show!.basePrice + (seat.priceModifier || 0);
            setSelectedSeats(prev => [...prev, { row: rowLabel, number: seat.number, price, type: seat.type }]);
        }
    };

    const handleProceed = async () => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (!user.user) {
            alert('Please Login First');
            navigate('/login');
            return;
        }

        try {
            // Lock Seats
            await api.post('/booking/lock-seats', {
                showId,
                userId: user.user.id,
                seats: selectedSeats.map(s => ({ row: s.row, number: s.number }))
            });
            // Go to Pay
            const total = selectedSeats.reduce((sum, s) => sum + s.price, 0);
            navigate('/payment', {
                state: {
                    showId,
                    seats: selectedSeats,
                    total,
                    movie: show!.movieId,
                    theater: show!.theaterId,
                    startTime: show!.startTime
                }
            });
        } catch (e: any) {
            alert(e.response?.data || 'Failed to lock seats');
            fetchSeatData(); // refresh
        }
    };

    if (!show) return <div className="text-center mt-10">Loading Layout...</div>;

    const totalAmount = selectedSeats.reduce((sum, s) => sum + s.price, 0);

    return (
        <div className="min-h-screen bg-gray-900 text-white pb-20">
            <header className="p-4 bg-gray-800">
                <h2 className="text-lg">{show.movieId.title} - {new Date(show.startTime).toLocaleString()}</h2>
                <p className="text-sm text-gray-400">{show.theaterId.name}</p>
            </header>

            <div className="container mx-auto p-8 overflow-auto">
                <div className="flex flex-col gap-4 items-center">
                    {layout.map((row) => (
                        <div key={row.rowLabel} className="flex items-center gap-4">
                            <span className="w-8 text-gray-500 font-bold">{row.rowLabel}</span>
                            <div className="flex gap-2">
                                {row.seats.map((seat, idx) => {
                                    if (seat.type === 'gap') return <div key={idx} className="w-8"></div>;

                                    const isSelected = selectedSeats.some(s => s.row === row.rowLabel && s.number === seat.number);
                                    let bgClass = "bg-white border-green-500 text-green-500 hover:bg-green-50";

                                    if (seat.status === 'BOOKED') bgClass = "bg-gray-600 border-gray-600 text-gray-400 cursor-not-allowed";
                                    else if (seat.status === 'LOCKED') bgClass = "bg-yellow-500 border-yellow-500 text-white cursor-not-allowed";
                                    else if (isSelected) bgClass = "bg-green-500 border-green-500 text-white";

                                    return (
                                        <button
                                            key={idx}
                                            disabled={seat.status !== 'AVAILABLE'}
                                            onClick={() => handleSeatClick(row.rowLabel, seat)}
                                            className={`w-6 h-6 rounded text-xs font-bold border ${bgClass} transition`}
                                        >
                                            {/* {seat.number} */}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <div className="w-64 h-2 bg-gray-700 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]"></div>
                    <span className="absolute mt-4 text-xs text-gray-500">Screen this way</span>
                </div>
            </div>

            {selectedSeats.length > 0 && (
                <div className="fixed bottom-0 w-full bg-white text-black p-4 shadow-2xl flex justify-between items-center z-50">
                    <div>
                        <span className="block text-sm text-gray-500">Selected Seats: <span className="font-semibold text-black">{selectedSeats.map(s => `${s.row}${s.number}`).join(', ')}</span></span>
                        <div className="flex items-baseline gap-2">
                            <span className="font-bold text-xl">₹ {totalAmount}</span>
                            <span className="text-xs text-gray-500">({selectedSeats.length} Seats)</span>
                        </div>
                    </div>
                    <button
                        onClick={handleProceed}
                        className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 font-bold"
                    >
                        Proceed to Pay
                    </button>
                </div>
            )}
        </div>
    );
};

export default SeatSelectionPage;
