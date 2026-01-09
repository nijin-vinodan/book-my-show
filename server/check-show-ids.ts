
import mongoose from 'mongoose';
import { Show } from './catalog/models';

const connect = async () => mongoose.connect('mongodb://localhost:27017/bookmyshow');

const run = async () => {
    await connect();

    console.log("--- Checking Show IDs for Inception (Screen 1) ---");
    // Find all Shows for 'Inception' (ID: 65e9...b1) on Screen 1
    // We'll just fetch all and filter to be safe
    const shows = await Show.find({ movieId: '65e9b8966c43431f943500b1' }).sort({ startTime: 1 });

    // Assuming first show's screen is the one we want to track
    if (shows.length === 0) {
        console.log("No shows found for Inception.");
        process.exit(0);
    }

    const screenId = shows[0].screenId.toString();
    const screenShows = shows.filter(s => s.screenId.toString() === screenId);

    console.log(`Movie: Inception | Screen ID: ${screenId}`);
    console.log("----------------------------------------------------------------");
    console.log("| Date       | Time     | Show ID (Must be unique)         |");
    console.log("----------------------------------------------------------------");

    screenShows.forEach(s => {
        const d = s.startTime;
        const dateStr = d.toISOString().split('T')[0];
        const timeStr = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        console.log(`| ${dateStr} | ${timeStr} | ${s._id} |`);
    });
    console.log("----------------------------------------------------------------");

    // Check for duplicates
    const ids = screenShows.map(s => s._id.toString());
    const uniqueIds = new Set(ids);
    if (ids.length !== uniqueIds.size) {
        console.error("FAILURE: Duplicate Show IDs found!");
    } else {
        console.log("SUCCESS: All Show IDs are unique.");
        console.log(`Total Shows: ${ids.length}, Unique IDs: ${uniqueIds.size}`);
    }

    process.exit(0);
};

run().catch(console.error);
