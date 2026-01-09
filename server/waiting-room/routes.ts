import express from 'express';
import { asyncHandler } from '../shared/middleware';
import * as WaitingRoomController from './controller';

const router = express.Router();

router.get('/status', asyncHandler(WaitingRoomController.status));
router.post('/join', asyncHandler(WaitingRoomController.join));
router.post('/validate', asyncHandler(WaitingRoomController.validate));

export default router;
