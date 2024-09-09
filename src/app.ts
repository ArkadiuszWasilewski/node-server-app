import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response } from 'express';
import { connectDB } from './config/dbConfig';
import userRoutes from './routes/userRoutes';


const app: Express = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());

//Routes
app.use('/api/users', userRoutes);

connectDB().then(() => {
    // Start the server only after successfully connecting to the database
    app.listen(port, () => {
      console.log('Server is running on port:', port);
    });
  }).catch((error) => {
    console.error('Failed to connect to the database', error);
  });

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

export default app;