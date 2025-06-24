// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();

const app = express();

// CORS config - allow all origins for testing
app.use(cors({
  origin: "*",
}));

// JSON body parser
app.use(express.json());

// Routes
app.use("/feedback", feedbackRoutes);

// Test route to check server is up
app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
