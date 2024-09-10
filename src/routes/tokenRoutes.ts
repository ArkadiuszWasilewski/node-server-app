import express from 'express';
import { verifyToken } from '../controllers/tokenController';

const router = express.Router();

// POST route for verifying token
router.post('/verify-token', verifyToken);

export default router;