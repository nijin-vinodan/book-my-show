import express from 'express';
import cors from 'cors';
import { connectDB } from '../shared/database';
import { errorHandler } from '../shared/middleware';
import catalogRoutes from './routes';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/', catalogRoutes);

app.use(errorHandler);

connectDB('Catalog');

app.listen(PORT, () => {
    console.log(`Catalog Service running on port ${PORT}`);
});
