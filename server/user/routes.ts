import express from 'express';
import { asyncHandler } from '../shared/middleware';
import * as UserController from './controller';

const router = express.Router();

router.post('/register', asyncHandler(UserController.register));
router.post('/login', asyncHandler(UserController.login));
router.get('/me', asyncHandler(UserController.getMe));

export default router;
