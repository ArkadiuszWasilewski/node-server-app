import { Request, Response } from "express";
import mongoose from "mongoose";
import { reportSchema } from "../models/reportModel";

// Define the interface for filters
interface ReportFilters {
  characterGear?: string[];
  levelRange?: [number, number];
  sizes?: string[];
  sortBy?: string;
  currentSpawn?: string[];
  characterVocation?: string[];
}

const Report = mongoose.model("Report", reportSchema);

export const postFilters = async (
  req: Request<ReportFilters>,
  res: Response
) => {
  const filters: ReportFilters = req.body;

  // Log incoming filters
  console.log("Received filters:", JSON.stringify(filters, null, 2));

  // Validate filters
  if (!filters || Object.keys(filters).length === 0) {
    console.log("Error: No filters provided");
    return res.status(400).json({ error: "No filters provided" });
  }

  try {
    // Build and log the query
    const { query } = buildQuery(filters);
    console.log("Constructed MongoDB query:", JSON.stringify(query, null, 2));

    // Execute the query
    const reports = await Report.find(query).exec();

    // Log the number of reports and their contents
    console.log(`Found ${reports.length} reports`);
    // console.log("Reports:", JSON.stringify(reports, null, 2));

    res.json(reports);
  } catch (error) {
    console.error("Error fetching reports:", (error as Error).message);
    res
      .status(500)
      .json({ error: `Failed to fetch reports: ${(error as Error).message}` });
  }
};

function buildQuery(filters: ReportFilters) {
  const query: { [key: string]: any } = {};

  // Handle currentSpawn
  if (
    filters.currentSpawn &&
    Array.isArray(filters.currentSpawn) &&
    filters.currentSpawn.length > 0
  ) {
    query.currentSpawn = { $in: filters.currentSpawn };
  }

  // Handle levelRange
  if (
    filters.levelRange &&
    Array.isArray(filters.levelRange) &&
    filters.levelRange.length === 2
  ) {
    const [minLevel, maxLevel] = filters.levelRange;
    if (minLevel !== undefined && maxLevel !== undefined) {
      query.characterLevel = { $gte: Number(minLevel), $lte: Number(maxLevel) };
    }
  }

  // Handle characterGear (only if not empty)
  if (
    filters.characterGear &&
    Array.isArray(filters.characterGear) &&
    filters.characterGear.length > 0
  ) {
    query.characterGear = { $in: filters.characterGear };
  }

  // Handle charactercharacterVocation (only if not empty)
  if (
    filters.characterVocation &&
    Array.isArray(filters.characterVocation) &&
    filters.characterVocation.length > 0
  ) {
    query.characterVocation = { $in: filters.characterVocation };
  }

  return { query };
}
