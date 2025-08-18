import express from "express";
import { postFilters } from "../controllers/reportController";

const router = express.Router();

// /api/reports
router.post("/filters", postFilters);

export default router;
