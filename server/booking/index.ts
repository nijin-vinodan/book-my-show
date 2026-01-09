import express from 'express';
import cors from 'cors';
import { connectDB } from '../shared/database';
import { errorHandler } from '../shared/middleware';
import bookingRoutes from './routes';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.use('/', bookingRoutes);

app.use(errorHandler);

connectDB('Booking');

app.listen(PORT, () => {
    console.log(`Booking Service running on port ${PORT}`);
});
