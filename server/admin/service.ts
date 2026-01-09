import { Location, Movie, Theater, Screen, Show } from '../catalog/models';
import { Booking, SeatLock } from '../booking/models';
import { seedData as DATA } from './seed-data';

export const createLocation = (data: any) => Location.create(data);
export const createMovie = (data: any) => Movie.create(data);
export const createTheater = (data: any) => Theater.create(data);
export const createScreen = (data: any) => Screen.create(data);
export const createShow = (data: any) => Show.create(data);

export const seedData = async () => {
    try {
        await Location.deleteMany({});
        await Movie.deleteMany({});
        await Theater.deleteMany({});
        await Screen.deleteMany({});
        await Screen.deleteMany({});
        await Show.deleteMany({});
        await Booking.deleteMany({});
        await SeatLock.deleteMany({});

        // 1. Create Locations from seed data
        for (const locData of DATA.locations) {
            await Location.create(locData);
        }

        // 2. Create Movies from seed data
        for (const movieData of DATA.movies) {
            await Movie.create({ ...movieData, releaseDate: new Date() });
        }

        // 3. Create Theaters & Screens & Shows
        const results: any[] = [];

        for (const theaterData of DATA.theaters) {
            const { screens, ...theaterDetails } = theaterData as any;

            const theater = await Theater.create(theaterDetails);

            if (screens && Array.isArray(screens)) {
                for (const screenData of screens) {
                    // Extract movieSchedules from SCREEN level
                    const { movieSchedules, ...screenDetails } = screenData as any;

                    const screen = await Screen.create({ ...screenDetails, theaterId: theater._id });

                    if (!movieSchedules || !Array.isArray(movieSchedules)) continue;

                    // Iterate over each movie schedule which now includes DATE
                    for (const schedule of movieSchedules) {
                        const { movieId, showTimes, date } = schedule;

                        // Strict check: Date must be present
                        if (!date || !showTimes || showTimes.length === 0) continue;

                        const scheduleDate = new Date(date);

                        // Create Shows for this SPECIFIC movie at SPECIFIC times on SPECIFIC DATE
                        for (let i = 0; i < showTimes.length; i++) {
                            const timeStr = showTimes[i];
                            const [hours, minutes] = timeStr.split(':').map(Number);

                            const showTime = new Date(scheduleDate);
                            showTime.setHours(hours, minutes, 0, 0);

                            await Show.create({
                                movieId: movieId,
                                theaterId: theater._id,
                                screenId: screen._id,
                                startTime: showTime,
                                basePrice: 200 // Fixed base price for now
                            });
                        }
                    }
                }
            }
            results.push(theater);
        }

        return { message: 'Seeded successfully: Fully Explicit Date & Time Scheduling', count: results.length };
    } catch (error) {
        console.error("Seeding error:", error);
        throw error;
    }
};
