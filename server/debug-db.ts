import mongoose from 'mongoose';
import { Show } from './catalog/models';
import { Booking as BookingModel } from './booking/models';

const run = async () => {
    await mongoose.connect('mongodb://localhost:27017/bookmyshow');

    // 1. Check Shows for a specific movie (Inception or Interstellar)
    console.log("--- Checking Shows ---");
    const shows = await Show.find({}).sort({ startTime: 1 });
    console.log(`Total Shows: ${shows.length}`);

    // Group by Movie + Screen + Time to check for duplicates?
    // Just print first few with IDs
    shows.slice(0, 10).forEach(s => {
        console.log(`Show ID: ${s._id} | Date: ${s.startTime.toISOString()} | Screen: ${s.screenId}`);
    });

    // 2. Check Bookings
    console.log("\n--- Checking Bookings ---");
    const bookings = await BookingModel.find({});
    bookings.forEach(b => {
        console.log(`Booking ID: ${b._id} | Show ID: ${b.showId} | Seats: ${b.seats.length}`);
    });

    // 3. Verify Isolation
    // Pick a Show ID from bookings and see if it duplicates?
    const bookingCountsByShow = {};
    bookings.forEach(b => {
        const sid = b.showId.toString();
        bookingCountsByShow[sid] = (bookingCountsByShow[sid] || 0) + 1;
    });
    console.log("\n--- Booking Counts by Show ID ---");
    console.log(bookingCountsByShow);

    process.exit();
};

run().catch(console.error);
