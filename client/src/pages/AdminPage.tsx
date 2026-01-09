import React from 'react';
import api from '../services/api';

const AdminPage: React.FC = () => {
    const handleSeed = async () => {
        try {
            const res = await api.post('/admin/seed');
            alert('Data Seeded Successfully!');
            console.log(res.data);
        } catch (e) {
            alert('Seeding Failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
                <button
                    onClick={handleSeed}
                    className="bg-indigo-600 px-8 py-4 rounded text-lg hover:bg-indigo-700 transition"
                >
                    Reset & Seed Database
                </button>
                <p className="mt-4 text-gray-400">Warning: This will clear all existing data.</p>
            </div>
        </div>
    );
};

export default AdminPage;
