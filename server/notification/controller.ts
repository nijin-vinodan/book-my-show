import { Request, Response } from 'express';
import * as NotificationService from './service';

export const send = async (req: Request, res: Response) => {
    const { email, message } = req.body;
    await NotificationService.sendEmail(email, message);
    res.json({ success: true });
};
