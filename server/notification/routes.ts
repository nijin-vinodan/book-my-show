import express from 'express';
import { asyncHandler } from '../shared/middleware';
import * as NotificationController from './controller';

const router = express.Router();

router.post('/send', asyncHandler(NotificationController.send));

export default router;
