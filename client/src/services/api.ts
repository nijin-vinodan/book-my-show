import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Gateway

const api = axios.create({
    baseURL: API_BASE_URL,
});

// Add Token to requests
api.interceptors.request.use((config) => {
    const user = localStorage.getItem('user');
    if (user) {
        const parsed = JSON.parse(user);
        if (parsed.token) {
            // Mock token standard
            config.headers.Authorization = `Bearer ${parsed.token}`;
        }
    }
    const queueToken = localStorage.getItem('queueToken');
    if (queueToken) {
        config.headers['x-queue-token'] = queueToken;
    }
    return config;
});

// Check for Waiting Room Redirect
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 429 && error.response.data.redirect) {
            window.location.href = '/waiting-room';
        }
        return Promise.reject(error);
    }
);

export default api;
