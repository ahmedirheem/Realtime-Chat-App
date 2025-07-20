import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome Express!!");
});

app.listen(5500, () => {
  console.log("Server is Running");
});
