import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const BookingConfirmationPage: React.FC = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    // Ideally, state should contain booking details passed from PaymentPage
    // But for now, we'll just show a generic success message if no state is present,
    // or use the state if available.

    const qrData = state ? JSON.stringify({
        movie: state.movie?.title,
        date: state.startTime,
        seats: state.seats?.map((s: any) => `${s.row}${s.number}`),
        bookingId: state.bookingId
    }) : '';

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
                <p className="text-gray-400 mb-8">Your tickets have been successfully booked.</p>

                {state && (
                    <div className="bg-gray-700 rounded-lg overflow-hidden mb-8 w-full text-left">
                        {state.movie?.posterUrl && (
                            <div className="w-full h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
                                <img src={state.movie.posterUrl} alt={state.movie.title} className="w-full h-full object-cover" />
                            </div>
                        )}
                        <div className="p-6">
                            {state.movie && <h3 className="text-xl font-bold text-white mb-2">{state.movie.title}</h3>}
                            {state.theater && <p className="text-sm text-gray-400 mb-1">{state.theater.name}</p>}
                            {state.startTime && <p className="text-sm text-gray-400 mb-4">{new Date(state.startTime).toLocaleString()}</p>}

                            <hr className="border-gray-600 my-4" />

                            <div className="flex justify-between mb-2">
                                <span className="text-gray-400">Seats</span>
                                <span className="font-semibold">{state.seats?.map((s: any) => `${s.row}${s.number}`).join(', ')}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-400">Booking ID</span>
                                <span className="font-mono text-xs bg-gray-600 px-2 py-1 rounded">{state.bookingId}</span>
                            </div>
                            <div className="flex justify-between mt-4">
                                <span className="text-gray-400">Total Amount</span>
                                <span className="text-xl font-bold text-green-400">₹ {state.totalAmount}</span>
                            </div>

                            <hr className="border-gray-600 my-4" />

                            <div className="flex flex-col items-center justify-center mt-6">
                                <div className="bg-white p-2 rounded-lg">
                                    <QRCodeSVG value={qrData} size={128} />
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Scan for ticket details</p>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    onClick={() => navigate('/')}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded transition duration-200"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default BookingConfirmationPage;
