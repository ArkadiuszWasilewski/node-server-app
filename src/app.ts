import express, { Express } from 'express';
import verifyFirebaseToken from './middleware/verifyFirebaseToken'; // Adjust path as necessary
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import corsMiddleware from './middleware/cors'
import errorHandler from './middleware/errorHandler';

// Initialize the Express application
const app: Express = express();
  
// Middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(verifyFirebaseToken);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', tokenRoutes)

// Error Handling Middleware
app.use(errorHandler);

// Export the app instance
export default app;

// Connect to database and start server in a separate file