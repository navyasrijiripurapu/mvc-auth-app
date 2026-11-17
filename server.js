import express from "express";
import cors from "cors";

import todoRoutes from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "MVC Authentication and Todo API is running!"
  });
});

// User routes
app.use("/api/v1/users", userRoutes);

// Todo routes
app.use("/api/v1/todos", todoRoutes);

// 404 route
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

// Local server
const PORT = process.env.PORT || 9000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

// Vercel serverless export
export default app;
