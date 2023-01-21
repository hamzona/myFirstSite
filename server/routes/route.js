const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://hamzaa:ludak567!@cluster0.5d2q2m7.mongodb.net/?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected");
});
const slidesSCH = require("../model/model");
route.get("/", (req, res) => {
  res.send("work");
});
route.get("/slides", async (req, res) => {
  try {
    const slides = await slidesSCH.find({});
    res.send(slides);
  } catch (err) {
    console.log(err);
  }
});
route.post("/slides", async (req, res) => {
  console.log(req.body);
  try {
    const newQuiz = await new slidesSCH({
      quizName: req.body.name,
      slides: req.body.slides,
    });
    await newQuiz.save();
    res.send(newQuiz);
  } catch (err) {
    console.log(err);
  }
});
module.exports = route;
