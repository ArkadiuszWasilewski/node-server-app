import express, { Express } from 'express';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import corsMiddleware from './middleware/cors'
import errorHandler from './middleware/errorHandler';

// Initialize the Express application
const app: Express = express();
  
// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', tokenRoutes)

// Error Handling Middleware
app.use(errorHandler);

// Export the app instance
export default app;

// Connect to database and start server in a separate file