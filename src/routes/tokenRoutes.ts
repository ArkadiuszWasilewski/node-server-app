import express from 'express';
import { verifyToken } from '../controllers/tokenController';
import { getUserRecord } from '../controllers/userController';

const router = express.Router();

// POST route for verifying token

// /api/auth
router.post('/verify-token', verifyToken, getUserRecord);

export default router;