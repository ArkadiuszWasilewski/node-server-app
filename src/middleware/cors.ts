import cors from 'cors'

// Configure CORS (Cross-origin resource sharing)
const corsOptions = {
    origin: process.env.CLIENT_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

export default cors(corsOptions);