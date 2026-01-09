import mongoose, { Schema, Document } from 'mongoose';

export interface ISeatLock extends Document {
    showId: mongoose.Types.ObjectId;
    seatRow: string;
    seatNumber: string;
    userId: mongoose.Types.ObjectId;
    lockedAt: Date;
}
export const SeatLockSchema = new Schema({
    showId: { type: Schema.Types.ObjectId, required: true },
    seatRow: String,
    seatNumber: String,
    userId: { type: Schema.Types.ObjectId, required: true },
    lockedAt: { type: Date, default: Date.now, expires: 600 } // 10 mins TTL
});
export const SeatLock = mongoose.model<ISeatLock>('SeatLock', SeatLockSchema);

export interface IBooking extends Document {
    userId: mongoose.Types.ObjectId;
    showId: mongoose.Types.ObjectId;
    seats: { row: string, number: string, price: number }[];
    totalAmount: number;
    paymentId: string;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
    bookingDate: Date;
    createdAt: Date;
}
export const BookingSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true },
    showId: { type: Schema.Types.ObjectId, required: true },
    seats: [{
        row: String,
        number: String,
        price: Number
    }],
    totalAmount: Number,
    paymentId: String,
    status: { type: String, enum: ['PENDING', 'CONFIRMED', 'CANCELLED'], default: 'PENDING' },
    bookingDate: { type: Date }, // Explicit date for separation/debugging
    createdAt: { type: Date, default: Date.now }
});
export const Booking = mongoose.model<IBooking>('Booking', BookingSchema);
