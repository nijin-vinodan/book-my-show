import mongoose from 'mongoose';

export const connectDB = async (serviceName: string) => {
    try {
        await mongoose.connect('mongodb://localhost:27017/bookmyshow');
        console.log(`[${serviceName}] Connected to MongoDB`);
    } catch (error) {
        console.error(`[${serviceName}] MongoDB connection error:`, error);
        process.exit(1);
    }
};
