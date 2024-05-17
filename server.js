import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import { body, validationResult } from "express-validator";

//routers
import jobRouter from "./routes/jobRouter.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

//middlewares
app.use(errorHandlerMiddleware);

if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "recieved", data: req.body });
});

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: "not found !" });
});

// app.use((err, req, res, next) => {
//   console.log(err);
//   res
//     .status(StatusCodes.INTERNAL_SERVER_ERROR)
//     .json({ msg: "something went wrong !" });
// });

//Port
const port = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log(err);
  process.exit(1);
}
