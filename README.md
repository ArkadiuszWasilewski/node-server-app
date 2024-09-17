# Backend for Client-Side Application

This is the backend repository for a web application that communicates with a client-side app. It handles user authentication with Firebase, and stores user data in MongoDB using Mongoose.

## Features

- Firebase Admin SDK for token verification and user management.
- MongoDB for storing user data.
- User authentication and authorization.
- RESTful API for managing users.
- Cross-Origin Resource Sharing (CORS) enabled.
- Error handling middleware.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework.
- **Firebase Admin SDK**: For user authentication.
- **Mongoose**: MongoDB object modeling.
- **TypeScript**: Strongly typed JavaScript.

## Project Structure

```
├── config/
│ ├── dbConfig.ts # Database connection configuration
│ ├── firebaseAdmin.ts # Firebase Admin SDK initialization
├── controllers/
│ ├── tokenControllers.ts # Token verification logic
│ ├── userController.ts # User-related logic (CRUD operations)
├── middleware/
│ ├── cors.ts # CORS configuration
│ ├── errorHandler.ts # Global error handling middleware
│ ├── verifyFirebaseToken.ts # Firebase token verification middleware
├── models/
│ └── userModel.ts # Mongoose user schema and model
├── routes/
│ ├── tokenRoutes.ts # Routes for token-related operations
│ └── userRoutes.ts # Routes for user-related operations
├── types/
│ └── AuthenticatedRequest.ts # TypeScript type for authenticated requests
├── app.ts # Main Express app setup
├── server.ts # Server and database connection logic
└── .env # Environment variables (not included in the repo)
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
