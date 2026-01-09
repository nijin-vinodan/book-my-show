import express from 'express';
import cors from 'cors';
import { connectDB } from '../shared/database';
import { errorHandler } from '../shared/middleware';
import adminRoutes from './routes';

const app = express();
const PORT = 3006;

app.use(cors());
app.use(express.json());

app.use('/', adminRoutes);

app.use(errorHandler);

connectDB('Admin');

app.listen(PORT, () => {
    console.log(`Admin Service running on port ${PORT}`);
});

