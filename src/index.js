import dotenv from "dotenv";
import express from "express"; // Ensure express is imported
import connectDB from "./db/index.js"; // Ensure path is correct

// Initialize the Express app
const app = express();

// Load environment variables
dotenv.config({
  path: './env', // Path to your .env file
});

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    console.error("Error details:", err);
  });
