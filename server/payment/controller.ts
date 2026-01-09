import { Request, Response } from 'express';
import * as PaymentService from './service';

export const process = async (req: Request, res: Response) => {
    const { amount, token } = req.body;
    const result = await PaymentService.processPayment(amount, token);

    if (result.success) {
        res.json(result);
    } else {
        res.status(400).json({ success: false, message: 'Payment Declined' });
    }
};
