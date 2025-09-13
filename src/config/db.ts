/**
 * Database configuration module.
 * Handles MongoDB connection setup using Mongoose ODM.
 */

import mongoose from 'mongoose';

/**
 * Asynchronous function to establish a connection to MongoDB.
 * Retrieves the connection URI from environment variables.
 * On successful connection, logs a confirmation message.
 * On failure, logs the error and terminates the process with exit code 1.
 *
 * @throws Will exit the process if connection fails
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
