import React, { useEffect, useState } from 'react';
import api from '../services/api';

const WaitingRoomPage: React.FC = () => {
    const [status, setStatus] = useState('WAITING');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (!user.user) {
            // If no user, mock a guest ID or force login
            // For POC, just assume user exists or generate temp ID
            return;
        }

        const poll = async () => {
            try {
                // First join
                if (status === 'WAITING') {
                    await api.post('/waiting-room/join', { userId: user.user.id });
                }

                // Check msg
                const res = await api.get(`/waiting-room/status?userId=${user.user.id}`);
                if (res.data.status === 'ACTIVE') {
                    // Save Queue Token?
                    // Ideally API wrapper handles this via global state/interceptor injection
                    // For POC, simple redirect
                    localStorage.setItem('queueToken', res.data.token);
                    window.location.href = '/';
                }
            } catch (e) { }
        };

        const interval = setInterval(poll, 3000);
        return () => clearInterval(interval);
    }, [status]);

    return (
        <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-4xl font-bold text-yellow-600 mb-4">You are in the Queue</h1>
            <p className="text-gray-600 mb-8">Please wait while we make space for you. Do not refresh.</p>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
        </div>
    );
};

export default WaitingRoomPage;
