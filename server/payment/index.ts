import express from 'express';
import cors from 'cors';
import { errorHandler } from '../shared/middleware';
import paymentRoutes from './routes';

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

app.use('/', paymentRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Payment Service running on port ${PORT}`);
});
