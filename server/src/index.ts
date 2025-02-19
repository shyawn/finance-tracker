// import express, { Express } from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import financialRecordRouter from "./routes/financial-records";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const financialRecordRouter = require("./routes/financial-records");
const cors = require("cors");
const path = require("path");
// const url = require("url");

// const app: Express = express();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
// const __dirname = path.resolve();
// import { fileURLToPath } from "url";

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());

dotenv.config();
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(`${mongoURI}`)
  .then(() => console.log("Connected to mongoDb"))
  .catch((err: any) => console.error("Failed to connect to mongoDb: ", err));

app.use("/financial-records", financialRecordRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req: any, res: any) => {
    res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
  });
}

app.listen(port, "0.0.0.0", () => {
  console.log(`Server Running on Port ${port}`);
});
