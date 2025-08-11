import { Request, Response } from 'express';
import { data } from '../utils/fakeDataUser';

// In-memory array to store reports (replace with database if needed)
let reports: any[] = [];


export const getAllFakeUsers = async (req: Request, res: Response) =>{
    try {
    
        // 
        console.log("Showing all fake users.");
        res.send(data);

    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}
export const postReports = async (req: Request, res: Response) => {
  try {
    const { sessionData, reportDescription, characterVocation, characterLevel, characterGear, currentSpawn } = req.body;

    // Server-side validation

    const report = {
      sessionData,
      reportDescription,
      characterVocation,
      characterLevel,
      characterGear,
      currentSpawn,
      createdAt: new Date().toISOString(),
    };

    // Save to in-memory array (replace with database)
    reports.push(report);
    console.log("Saved report:", report); // Log saved report

    return res.status(201).json({ success: true, message: "Report saved successfully" });
  } catch (error: any) {
    console.error("Error saving report:", error);
    return res.status(500).json({ error: error.message });
  }
};

// GET /api/test/reports - Retrieve and log all reports
export const getReports = async (req: Request, res: Response) => {
  try {
    console.log("Retrieving reports:");
    console.log(reports); // Log all reports
    return res.status(200).json(reports);
  } catch (error: any) {
    console.error("Error retrieving reports:", error);
    return res.status(500).json({ error: error.message });
  }
};
