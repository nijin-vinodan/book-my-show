import { Request, Response } from 'express';
import * as CatalogService from './service';

export const getLocations = async (req: Request, res: Response) => {
    const locations = await CatalogService.findLocations();
    res.json(locations);
};

export const getMovies = async (req: Request, res: Response) => {
    const { locationId } = req.query;
    const movies = await CatalogService.findMovies(locationId);
    res.json(movies);
};

export const getTheaters = async (req: Request, res: Response) => {
    const { locationId } = req.query;
    const theaters = await CatalogService.findTheaters(locationId);
    res.json(theaters);
};

export const getShows = async (req: Request, res: Response) => {
    const { movieId, theaterId, locationId, date } = req.query;
    const filter: any = {};
    if (movieId) filter.movieId = movieId;
    if (theaterId) filter.theaterId = theaterId;

    if (date) {
        const start = new Date(date as string);
        start.setHours(0, 0, 0, 0);
        const end = new Date(start);
        end.setHours(23, 59, 59, 999);
        filter.startTime = { $gte: start, $lte: end };
    }

    if (locationId) {
        // Find all theaters in this location
        const theaters = await CatalogService.findTheaters(locationId);
        const theaterIds = theaters.map(t => t._id);

        // If specific theaterId was also requested, ensure it belongs to location
        if (filter.theaterId) {
            if (!theaterIds.find(id => id.toString() === filter.theaterId.toString())) {
                return res.json([]); // Theater not in Location
            }
        } else {
            // Filter shows by these theaters
            filter.theaterId = { $in: theaterIds };
        }
    }

    const shows = await CatalogService.findShows(filter);
    res.json(shows);
};

export const getScreen = async (req: Request, res: Response) => {
    const screen = await CatalogService.findScreenById(req.params.id);
    if (!screen) return res.status(404).send('Screen not found');
    res.json(screen);
};

export const getShowDetails = async (req: Request, res: Response) => {
    const show = await CatalogService.findShowById(req.params.id);
    if (!show) return res.status(404).send('Show not found');
    res.json(show);
};
