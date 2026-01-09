import express from 'express';
import cors from 'cors';
import { connectDB } from '../shared/database';
import { errorHandler } from '../shared/middleware';
import userRoutes from './routes';

const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.json());

app.use('/', userRoutes);

app.use(errorHandler);

connectDB('User');

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
