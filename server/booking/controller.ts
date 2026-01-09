import { Request, Response } from 'express';
import * as BookingService from './service';

export const getShowSeats = async (req: Request, res: Response) => {
    const { showId } = req.params;
    const result = await BookingService.getMergedSeatStatus(showId);
    res.json(result);
};

export const lockSeats = async (req: Request, res: Response) => {
    const { showId, seats, userId } = req.body;
    try {
        const locks = await BookingService.lockSeats(showId, seats, userId);
        res.json({ message: 'Seats locked', locks });
    } catch (e: any) {
        res.status(400).send(e.message);
    }
};

export const bookTickets = async (req: Request, res: Response) => {
    const { userId, showId, seats, totalAmount, paymentToken } = req.body;
    const booking = await BookingService.createBooking(userId, showId, seats, totalAmount, paymentToken);
    res.json(booking);
};
