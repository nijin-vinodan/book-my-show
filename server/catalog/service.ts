import { Location, Movie, Theater, Screen, Show } from './models';

export const findLocations = () => Location.find();
export const findMovies = async (locationId?: any) => {
    const filter: any = {};
    if (locationId) {
        // 1. Find theaters in this location
        const theaters = await Theater.find({ locationId });
        const theaterIds = theaters.map(t => t._id);

        // 2. Find active shows in these theaters
        const shows = await Show.find({ theaterId: { $in: theaterIds } }).select('movieId');
        const movieIds = shows.map(s => s.movieId);

        // 3. Filter movies
        filter._id = { $in: movieIds };
    }
    return Movie.find(filter);
};
export const findTheaters = (locationId?: any) => {
    const filter = locationId ? { locationId } : {};
    return Theater.find(filter);
};
export const findShows = (filter: any) => {
    return Show.find(filter)
        .populate('movieId')
        .populate('theaterId')
        .populate('screenId');
};
export const findScreenById = (id: string) => Screen.findById(id);
export const findShowById = (id: string) => {
    return Show.findById(id)
        .populate('movieId')
        .populate('theaterId')
        .populate('screenId');
};
