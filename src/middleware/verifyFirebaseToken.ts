import admin from "../config/firebaseAdmin";
import { AuthenticatedRequest } from "../types/AuthenticatedRequest";
import { Request, Response, NextFunction } from 'express';

const verifyFirebaseToken = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    const idToken = req.headers.authorization?.split("Bearer ")[1];
    console.log('Received token:', idToken); // Debugging log

    if(!idToken) {
        return res.status(401).json({message: "No token provided"});
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken;
        console.log("Decoded token: ", decodedToken);
        next();
    } catch (error) {
        console.error('Token verification failed:', error); // Debugging log
        return res.status(403).json({message: "Unauthorized access"});
    }
};

export default verifyFirebaseToken; 