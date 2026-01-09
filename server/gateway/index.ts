import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json()); // Removed to prevent body stream consumption before proxy

const WAITING_ROOM_URL = 'http://localhost:3005';

// Queue Middleware
const queueMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Skip for non-critical paths or the waiting room itself
    if (req.path.startsWith('/api/waiting-room') || req.path === '/' || req.method === 'OPTIONS') {
        return next();
    }

    // Check header
    const token = req.headers['x-queue-token'];

    // Simulate Load Check (randomly enforce queue if no token)
    // For POC: Assume traffic is high and token is ALWAYS required for /api/booking
    if (req.path.startsWith('/api/booking')) {
        if (!token) {
            return res.status(429).json({ error: 'Queue Token Required', redirect: '/waiting-room' });
        }

        // Validate Token
        try {
            const valRes = await axios.post(`${WAITING_ROOM_URL}/validate`, { token });
            if (!(valRes.data as any).valid) {
                return res.status(429).json({ error: 'Invalid or Expired Token', redirect: '/waiting-room' });
            }
        } catch (e) {
            // If waiting room service is down, maybe fail open or closed?
            console.error('Queue Validation Failed', e);
        }
    }

    next();
};

app.use(queueMiddleware);

// Proxy Routes
const services = [
    { route: '/api/users', target: 'http://localhost:3004' },
    { route: '/api/catalog', target: 'http://localhost:3001' },
    { route: '/api/booking', target: 'http://localhost:3002' },
    { route: '/api/payment', target: 'http://localhost:3003' },
    { route: '/api/waiting-room', target: 'http://localhost:3005' },
    { route: '/api/admin', target: 'http://localhost:3006' },
];

services.forEach(({ route, target }) => {
    app.use(route, createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            [`^${route}`]: '',
        },
    }));
});

app.get('/', (req, res) => {
    res.send('API Gateway is running');
});

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
