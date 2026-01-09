import { Request, Response } from 'express';
import * as AdminService from './service';

export const createLocation = async (req: Request, res: Response) => {
    const item = await AdminService.createLocation(req.body);
    res.json(item);
};
export const createMovie = async (req: Request, res: Response) => {
    const item = await AdminService.createMovie(req.body);
    res.json(item);
};
export const createTheater = async (req: Request, res: Response) => {
    const item = await AdminService.createTheater(req.body);
    res.json(item);
};
export const createScreen = async (req: Request, res: Response) => {
    const item = await AdminService.createScreen(req.body);
    res.json(item);
};
export const createShow = async (req: Request, res: Response) => {
    const item = await AdminService.createShow(req.body);
    res.json(item);
};
export const seed = async (req: Request, res: Response) => {
    const data = await AdminService.seedData();
    res.json({ message: 'Seeded successfully', data });
};
