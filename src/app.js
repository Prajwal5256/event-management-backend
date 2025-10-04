import express from "express";
import cors from "cors";
import userRoutes from "../routes/userRoute.js";

const app = express();

// ------------------- MIDDLEWARE -------------------

// Parse JSON bodies
app.use(express.json());

// Enable CORS for React frontend
app.use(cors({
  origin: "http://localhost:3000", // your React dev server
  credentials: true,
}));

// ------------------- ROUTES -------------------
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Hello from Express + local MongoDB backend!");
});

export default app;
