import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import { connectDB } from './config/dbConfig';
import userRoutes from './routes/userRoutes';

// Initialize the Express application
const app: Express = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Export the app instance
export default app;

// Connect to database and start server in a separate file