import express from 'express';
import { asyncHandler } from '../shared/middleware';
import * as CatalogController from './controller';

const router = express.Router();

router.get('/locations', asyncHandler(CatalogController.getLocations));
router.get('/movies', asyncHandler(CatalogController.getMovies));
router.get('/theaters', asyncHandler(CatalogController.getTheaters));
router.get('/shows', asyncHandler(CatalogController.getShows));
router.get('/screens/:id', asyncHandler(CatalogController.getScreen));
router.get('/shows/:id', asyncHandler(CatalogController.getShowDetails));

export default router;
