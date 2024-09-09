import mongoose from 'mongoose';

const mongoURI: string | undefined = process.env.MONGO_DB_URI;

if (!mongoURI) {
    console.error('MongoDB URI is not defined in environment variables');
    process.exit(1);
  }

export const connectDB = async () =>{
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error)
    }
  };