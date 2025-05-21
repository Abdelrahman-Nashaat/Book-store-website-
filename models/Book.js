const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  description: String,
  coverUrl: String,
  pages: Number,
  category: String,
  rate: Number,
});

module.exports = mongoose.model("Book", bookSchema);
