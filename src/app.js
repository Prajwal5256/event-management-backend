import express from "express";
import userRoutes from "../routes/userRoute.js";
const app = express();

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Hello from Express + local MongoDB backend!");
});

export default app;
