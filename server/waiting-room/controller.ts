import { Request, Response } from 'express';
import * as WaitingRoomService from './service';

export const status = async (req: Request, res: Response) => {
    const { userId } = req.query as any;
    if (!userId) return res.status(400).send('UserId required');

    const result = await WaitingRoomService.getStatus(userId);
    res.json(result);
};

export const join = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const result = await WaitingRoomService.joinQueue(userId);
    res.json(result);
};

export const validate = async (req: Request, res: Response) => {
    const { token } = req.body;
    const isValid = await WaitingRoomService.validateToken(token);
    res.json({ valid: isValid });
};
