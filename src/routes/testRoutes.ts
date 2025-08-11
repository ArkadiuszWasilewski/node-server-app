import express from 'express';
import { getAllFakeUsers, getReports, postReports } from '../controllers/testController';

const router = express.Router();

router.get('/fakeusers', getAllFakeUsers);
router.post('/reports', postReports);
router.get('/getreports', getReports);

export default router;