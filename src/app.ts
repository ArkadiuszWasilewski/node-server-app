import express, { Express } from 'express';
import cors from 'cors'
import verifyFirebaseToken from './middleware/verifyFirebaseToken'; // Adjust path as necessary
import userRoutes from './routes/userRoutes';

// Initialize the Express application
const app: Express = express();

// Configure CORS (Cross-origin resource sharing)
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(verifyFirebaseToken);


// Routes
app.use('/api/users', userRoutes);
//app.use('/verify-token', verifyToken)

// Define the /verify-token route
app.get('/verify-token', (req: any, res: express.Response) => { // Use `any` for req to access `user` property
    console.log('User:', req.user); // Debugging log
    res.send(`Hello, user with UID: ${req.user?.uid}`);
    console.log("User is connecting");
  });

// Error Handling Middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Export the app instance
export default app;

// Connect to database and start server in a separate file