import express from 'express';
import { getAllUsers, createUser, getUserRecord } from '../controllers/userController';

const router = express.Router();

//Question: shouldn't it be only for admin? How would it work on deploy?
router.get('/all', getAllUsers);
//Create User from client form data
//router.post('/', createUser);
router.get('/userrecord', getUserRecord )

export default router;