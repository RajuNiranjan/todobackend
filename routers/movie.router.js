import express from "express";
import { getMovieData, UploadMovie } from "../controller/movie.controller.js";

export const movieRouter = express.Router();

movieRouter.post("/uploadMovie", UploadMovie);
movieRouter.get("/getAllMovies", getMovieData);
