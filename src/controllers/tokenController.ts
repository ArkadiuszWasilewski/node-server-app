import { Response } from 'express';
import { AuthenticatedRequest } from "../types/AuthenticatedRequest"


// Controller function for verifying the token
export const verifyToken = (req: AuthenticatedRequest, res: Response) => {
  res.send(`Hello, user with UID: ${req.user?.uid}`);
  console.log(`User is connecting: ${req.user?.uid}`);
};