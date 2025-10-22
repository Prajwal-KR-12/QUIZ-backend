// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import DB connection
import connectDB from "./config/db.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json()); // parse JSON request bodies

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("✅ Quiz App Backend is Running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
dotenv.config();
connectDB();