// mongodb+srv://csjshawn:ON9xMag9XMyr8jZu@personalfinancetracker.vwe6y.mongodb.net/
import express, { Express } from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
