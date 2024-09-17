import { Request } from "express";
import admin from "../config/firebaseAdmin"; // Firebase Admin SDK

export interface AuthenticatedRequest extends Request {
  user?: admin.auth.DecodedIdToken; // Add the user property to the request
}