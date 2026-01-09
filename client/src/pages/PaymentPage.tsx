import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/api';

const PaymentPage: React.FC = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(600); // 10 mins

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    alert('Session Expired');
                    navigate('/'); // Back to home
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [navigate]);

    if (!state) return <div>Invalid Session</div>;
    const { showId, seats, total } = state;

    const handlePayment = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            await api.post('/booking/book', {
                userId: user.user.id,
                showId,
                seats,
                totalAmount: total,
                paymentToken: 'mock-visa-token'
            });
            alert('Booking Confirmed! Check console/notification.');
            navigate('/');
        } catch (e: any) {
            alert('Payment Failed');
        }
    };

    const formatTime = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${sec < 10 ? '0' : ''}${sec}`;
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-96 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-100 p-2 rounded-bl text-red-600 font-mono text-sm">
                    Expires in {formatTime(timeLeft)}
                </div>

                <h2 className="text-xl font-bold mb-6">Payment Gateway</h2>

                <div className="mb-6 space-y-2">
                    <div className="flex justify-between">
                        <span>Total Amount</span>
                        <span className="font-bold">₹ {total}</span>
                    </div>
                </div>

                <div className="border border-blue-500 bg-blue-50 p-4 rounded mb-6 text-center text-blue-700">
                    Mock Payment Gateway
                </div>

                <button
                    onClick={handlePayment}
                    className="w-full bg-green-500 text-white py-3 rounded font-bold hover:bg-green-600 transition"
                >
                    Pay ₹ {total}
                </button>
            </div>
        </div>
    );
};

export default PaymentPage;
