// models/Feedback.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Feedback", feedbackSchema);
