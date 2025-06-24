// routes/feedbackRoutes.js
import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// Add logging to check if route is hit
router.post("/", async (req, res) => {
  console.log("POST /feedback called with body:", req.body);

  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    console.error("Error saving feedback:", err);
    res.status(400).json({ error: "Error saving feedback" });
  }
});

router.get("/", async (req, res) => {
  try {
    const allFeedback = await Feedback.find().sort({ createdAt: -1 });
    res.json(allFeedback);
  } catch (err) {
    console.error("Error fetching feedback:", err);
    res.status(500).json({ error: "Error fetching feedback" });
  }
});

export default router;
