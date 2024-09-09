import { Request, Response } from "express";
import User from "../models/userModel"

//Get all users
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