import app from './app';
import { connectDB } from './config/dbConfig';

const port = process.env.PORT || 3000;

connectDB().then(() => {
    // Start the server only after successfully connecting to the database
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database', error);
});