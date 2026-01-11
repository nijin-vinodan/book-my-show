
import { connectDB } from '../shared/database';
import { seedData } from './service';

const run = async () => {
    try {
        await connectDB('Admin');
        console.log('Connected to DB, running manual seed...');
        const res = await seedData();
        console.log('Seed result:', res);
        process.exit(0);
    } catch (error) {
        console.error('Seed failed:', error);
        process.exit(1);
    }
};

run();
