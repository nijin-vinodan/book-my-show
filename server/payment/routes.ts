import express from 'express';
import { asyncHandler } from '../shared/middleware';
import * as PaymentController from './controller';

const router = express.Router();

router.post('/process', asyncHandler(PaymentController.process));

export default router;
