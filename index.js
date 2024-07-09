import express from "express";
import dotenv from "dotenv";
import "./db.js";
import movieRouter from "./routers/movie.router.js";
import MoviesSchemaModel from "./models/movie.model.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () =>
  console.log(`server is connected to port number ${PORT}`)
);

app.use("/api/movies", movieRouter);

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "Wellcome to express backend " });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api", (req, res) => {
  try {
    return res.status(200).json({ message: "api is working " });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/movies/getAllMovies", async (req, res) => {
  try {
    const allMovies = await MoviesSchemaModel.find();
    return res.status(200).json({ allMoviesData: allMovies });
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});


