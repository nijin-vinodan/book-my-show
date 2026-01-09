import express from 'express';
import { asyncHandler } from '../shared/middleware';
import * as AdminController from './controller';

const router = express.Router();

router.post('/locations', asyncHandler(AdminController.createLocation));
router.post('/movies', asyncHandler(AdminController.createMovie));
router.post('/theaters', asyncHandler(AdminController.createTheater));
router.post('/screens', asyncHandler(AdminController.createScreen));
router.post('/shows', asyncHandler(AdminController.createShow));
router.post('/seed', asyncHandler(AdminController.seed));

export default router;
