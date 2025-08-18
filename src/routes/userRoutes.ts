import express from "express";
import { getAllUsers, getUserRecord } from "../controllers/userController";

const router = express.Router();

// /api/users
router.get("/all", getAllUsers);

//Create User from client form data

router.get("/userrecord", getUserRecord);

export default router;
