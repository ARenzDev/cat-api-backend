/**
 * Main application entry point for the Cat API Backend.
 * Sets up Express server with middleware, routes, and database connection.
 */

// Import required modules
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import routes from './routes';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Establish database connection
connectDB();

// Initialize Express application
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies
app.use('/api', routes); // Mount API routes
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Server configuration
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
