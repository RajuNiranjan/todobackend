import express from "express";
import { getMovieData, UploadMovie } from "../controller/movie.controller.js";
import MoviesSchemaModel from "../models/movie.model.js";

const router = express.Router();

// movieRouter.post("/uploadMovie", UploadMovie);
// router.get("/getAllMovies", async (req, res) => {
//     try {
//         const allMovies = await MoviesSchemaModel.find();
//         return res.status(200).json({ allMoviesData: allMovies });
//     } catch (error) {
//         console.error(error)
//         return res.status(500).json({
//             message: "Internal Server Error",
//         });
//     }
// });

export default router;

