import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    zoner: {
      type: String,
      required: true,
    },
    cast: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
      required: true,
    },
    synopsis: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, timeseries: true }
);

const MoviesSchemaModel = mongoose.model("Movie", movieSchema);

export default MoviesSchemaModel;
