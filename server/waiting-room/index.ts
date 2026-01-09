import express from 'express';
import cors from 'cors';
import { connectDB } from '../shared/database';
import { errorHandler } from '../shared/middleware';
import waitingRoomRoutes from './routes';

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json());

app.use('/', waitingRoomRoutes);

app.use(errorHandler);

connectDB('WaitingRoom');

app.listen(PORT, () => {
    console.log(`Waiting Room Service running on port ${PORT}`);
});

connectDB('WaitingRoom');

app.listen(PORT, () => {
    console.log(`Waiting Room Service running on port ${PORT}`);
});
