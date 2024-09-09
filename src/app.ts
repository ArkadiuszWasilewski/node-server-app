import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = 3000;

let greetings: string = "Hello World";

// Retrieve MongoDB URI from environment variables
const mongoURI: string | undefined = process.env.MONGO_DB_URI;

if (!mongoURI) {
  console.error('MongoDB URI is not defined in environment variables');
  process.exit(1);
}

// Connect to MongoDB Atlas using Mongoose
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

app.get('/', (req: Request, res: Response) => { 
  res.send(greetings.length.toString()); // Convert the number to a string to avoid type issues.
  console.log('Request received at /');
});

app.listen(port, () => {
  console.log('Listening on port:', port);
});