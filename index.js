import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors package
import "./db.js";
import { movieRouter } from "./routers/movie.router.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Use CORS middleware before defining routes
app.use(cors());

// Use express.json middleware to parse JSON bodies
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is connected to port number ${PORT}`);
});

app.use("/api/movies", movieRouter);

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "Welcome to express backend" });
  } catch (error) {
    console.log(error);
  }
});

// Error handling for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});
