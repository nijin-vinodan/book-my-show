import express from 'express';
import { asyncHandler } from '../shared/middleware';
import * as BookingController from './controller';

const router = express.Router();

router.get('/show-seats/:showId', asyncHandler(BookingController.getShowSeats));
router.post('/lock-seats', asyncHandler(BookingController.lockSeats));
router.post('/book', asyncHandler(BookingController.bookTickets));

export default router;
