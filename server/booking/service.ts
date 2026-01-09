import axios from 'axios';
import { Booking, SeatLock } from './models';

const CATALOG_URL = 'http://localhost:3001';
const PAYMENT_URL = 'http://localhost:3003';
const NOTIFICATION_URL = 'http://localhost:3007';

export const getMergedSeatStatus = async (showId: string) => {
    // 1. Get Show Details from Catalog
    const showRes = await axios.get<any>(`${CATALOG_URL}/shows/${showId}`);
    const show = showRes.data;
    if (!show) throw new Error('Show not found');

    const screen = show.screenId;

    // 2. Get Locks & Bookings
    const locks = await SeatLock.find({ showId });
    const bookings = await Booking.find({ showId, status: 'CONFIRMED' });

    // 3. Merge
    const layout = screen.seatLayout.map((row: any) => ({
        ...row,
        seats: row.seats.map((seat: any) => {
            const isLocked = locks.some(l => l.seatRow === row.rowLabel && l.seatNumber === seat.number);
            const isBooked = bookings.some(b => b.seats.some(s => s.row === row.rowLabel && s.number === seat.number));

            let status = 'AVAILABLE';
            if (isBooked) status = 'BOOKED';
            else if (isLocked) status = 'LOCKED';

            return { ...seat, status };
        })
    }));

    return { show, seatLayout: layout };
};

export const lockSeats = async (showId: string, seats: any[], userId: string) => {
    // Check if already locked/booked
    for (const seat of seats) {
        const existing = await SeatLock.findOne({ showId, seatRow: seat.row, seatNumber: seat.number });
        if (existing) throw new Error(`Seat ${seat.row}${seat.number} is already locked`);
    }

    const locks = await Promise.all(seats.map((s: any) => SeatLock.create({
        showId, seatRow: s.row, seatNumber: s.number, userId
    })));

    return locks;
};

export const createBooking = async (userId: string, showId: string, seats: any[], totalAmount: number, paymentToken: string) => {
    // 1. Validate Show & Date
    const showRes = await axios.get<any>(`${CATALOG_URL}/shows/${showId}`);
    const show = showRes.data;
    if (!show) throw new Error('Show not found');

    // 2. Process Payment
    try {
        await axios.post(`${PAYMENT_URL}/process`, { amount: totalAmount, token: paymentToken });
    } catch (e) {
        throw new Error('Payment Failed');
    }

    // 3. Create Booking with Explicit Date
    const booking = await Booking.create({
        userId,
        showId,
        seats,
        totalAmount,
        paymentId: 'mock-pid-' + Date.now(),
        status: 'CONFIRMED',
        bookingDate: show.startTime // Save explicitly
    });

    // 4. Release Locks
    await SeatLock.deleteMany({ showId, userId });

    // 5. Notify
    axios.post(`${NOTIFICATION_URL}/send`, {
        email: 'user@example.com',
        message: `Booking Confirmed! ID: ${booking._id}`
    }).catch(err => console.error('Notify failed', err.message));

    return booking;
};
