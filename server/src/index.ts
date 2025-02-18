// import express, { Express } from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import financialRecordRouter from "./routes/financial-records";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const financialRecordRouter = require("./routes/financial-records");
const cors = require("cors");

// const app: Express = express();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

dotenv.config();
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(`${mongoURI}`)
  .then(() => console.log("Connected to mongoDb"))
  .catch((err: any) => console.error("Failed to connect to mongoDb: ", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
