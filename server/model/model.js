const mongoose = require("mongoose");
const slidesSCH = new mongoose.Schema({
  quizName: { type: String, required: true },
  slides: Array,
});
module.exports = mongoose.model("slidesSCH", slidesSCH);
