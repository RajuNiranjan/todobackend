import express from "express";
import dotenv from "dotenv";
import "./db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () =>
  console.log(`server is connected to port number ${PORT}`)
);

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "Wellcome to express backend " });
  } catch (error) {
    console.log(error);
  }
});
