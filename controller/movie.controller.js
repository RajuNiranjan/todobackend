import MoviesSchemaModel from "../models/movie.model.js";

export const UploadMovie = async (req, res, next) => {
  try {
    const {
      image,
      title,
      year,
      zoner,
      cast,
      director,
      trailer,
      synopsis,
      description,
    } = req.body;

    if (
      !image ||
      !title ||
      !year ||
      !zoner ||
      !cast ||
      !director ||
      !trailer ||
      !synopsis ||
      !description
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMovie = new MoviesSchemaModel({
      image,
      title,
      year,
      zoner,
      cast,
      director,
      trailer,
      synopsis,
      description,
    });

    await newMovie.save();
    return res.status(201).json({ newMovieDetails: newMovie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMovieData = async (req, res, next) => {
  try {
    const allMovies = await MoviesSchemaModel.find();
    return res.status(200).json({ allMoviesData: allMovies });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
