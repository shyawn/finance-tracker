// import express, { Express } from "express";
import mongoose from "mongoose";

// const app: Express = express();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI = import.meta.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to mongoDb"))
  .catch((err) => console.error("Failed to connect to mongoDb: ", err));

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
