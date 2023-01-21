const mongoose = require("mongoose");
const slidesSCH = new mongoose.Schema({
  quizName: String,
  slides: Array,
});
module.exports = mongoose.model("slidesSCH", slidesSCH);
