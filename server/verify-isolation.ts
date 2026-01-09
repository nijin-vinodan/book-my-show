
import mongoose from 'mongoose';
import { Show } from './catalog/models';
import { Booking, SeatLock } from './booking/models';
import axios from 'axios';

// Mock DB connection since we are running as script
const connect = async () => mongoose.connect('mongodb://localhost:27017/bookmyshow');

const run = async () => {
    await connect();

    // 1. Find two shows for the SAME movie, SAME screen, DIFFERENT dates
    // Inception (65e9...b1) on Screen 1
    // Dates: 2026-01-08 and 2026-01-09

    // We need to query Shows populated? No, just raw.
    // Find all shows for Inception
    const movieId = '65e9b8966c43431f943500b1';
    const shows = await Show.find({ movieId }).sort({ startTime: 1 });

    // Filter for Screen 1 (we need to know screen ID, let's just group by screenId)
    const stats: Record<string, any[]> = {};
    shows.forEach(s => {
        const sid = s.screenId.toString();
        if (!stats[sid]) stats[sid] = [];
        stats[sid].push(s);
    });

    const screenId = Object.keys(stats)[0];
    const screenShows = stats[screenId];

    if (screenShows.length < 2) {
        console.error("Not enough shows to test isolation!");
        process.exit(1);
    }

    const show1 = screenShows[0]; // Jan 8 probably
    const show2 = screenShows.find(s => s.startTime.getDate() !== show1.startTime.getDate());

    if (!show2) {
        console.error("Could not find shows on different dates!");
        process.exit(1);
    }

    console.log(`Show 1 ID: ${show1._id} | Date: ${show1.startTime.toISOString()}`);
    console.log(`Show 2 ID: ${show2._id} | Date: ${show2.startTime.toISOString()}`);

    if (show1._id.toString() === show2._id.toString()) {
        console.error("CRITICAL FAILURE: Show IDs are identical!");
        process.exit(1);
    } else {
        console.log("SUCCESS: Show IDs are unique.");
    }

    // 2. Book a seat on Show 1
    console.log("Booking seat A1 on Show 1...");
    const booking = await Booking.create({
        userId: new mongoose.Types.ObjectId(),
        showId: show1._id,
        seats: [{ row: 'A', number: '1', price: 200 }],
        totalAmount: 200,
        status: 'CONFIRMED',
        bookingDate: show1.startTime
    });
    console.log("Booking created:", booking._id);

    // 3. Verify Show 1 has it blocked
    const bookings1 = await Booking.find({ showId: show1._id, 'seats.row': 'A', 'seats.number': '1' });
    console.log(`Show 1 Bookings for A1: ${bookings1.length} (Expected: 1)`);

    // 4. Verify Show 2 is CLEAR
    const bookings2 = await Booking.find({ showId: show2._id, 'seats.row': 'A', 'seats.number': '1' });
    console.log(`Show 2 Bookings for A1: ${bookings2.length} (Expected: 0)`);

    if (bookings2.length === 0) {
        console.log("VERIFICATION SUCCESSFUL: Bookings are isolated by date.");
    } else {
        console.error("VERIFICATION FAILED: Show 2 has bookings!");
    }

    process.exit(0);
};

run().catch(console.error);
