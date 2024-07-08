import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db_connect = async () => {
  const db_URL = process.env.MONGO_DB;

  try {
    await mongoose
      .connect(db_URL)
      .then(() => console.log("connected to database"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

db_connect();
