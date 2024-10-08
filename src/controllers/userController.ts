import { Request, Response, NextFunction } from "express";
import User from "../models/userModel"
import admin from "../config/firebaseAdmin"; // Import Firebase Admin SDK
import { AuthenticatedRequest } from "../types/AuthenticatedRequest";


//Get all users - it should be admin only
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({error: error.message });
    }
};

//Create new user
export const createUser = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    
    try {
        const newUser = new User({name, email, password});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

//Get user record from firebase admin SDK
export const getUserRecord = async (
    req: AuthenticatedRequest, 
    res: Response) => 
    {
    try {
        if (!req.user || !req.user.uid) {
            return res.status(401).json({ message: 'Unauthorized, no user found' });
        }
        //Fetch user data from Firebase Admin
        const userRecord  = await admin.auth().getUser(req.user.uid);
        console.log(userRecord.uid, userRecord.displayName, userRecord.email, userRecord.metadata.creationTime);
        res.status(200).json({
            userData: {
                uid: userRecord.uid,
                name: userRecord.displayName,
                email: userRecord.email,
                firebaseCreationTime: userRecord.metadata.creationTime,
            }
        })
    } catch (error: any) {
        res.status(500).json({error: error.message });
    }
}