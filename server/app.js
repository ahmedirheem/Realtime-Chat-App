import express from "express";
import { PORT } from "./config/env.js";
import connectDB from "./database/mongodb.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome Express!!");
});

app.listen(PORT, async () => {
  await connectDB()
  console.log(`Server is Running on http://localhost:${PORT}`);
});
