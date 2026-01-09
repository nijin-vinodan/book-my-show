import express from 'express';
import cors from 'cors';
import { errorHandler } from '../shared/middleware';
import notificationRoutes from './routes';

const app = express();
const PORT = 3007;

app.use(cors());
app.use(express.json());

app.use('/', notificationRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Notification Service running on port ${PORT}`);
});
