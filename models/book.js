const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  thumbmail: {type: String},
  link: String
});

const Book = mongoose.model("Book", googleBookSchema);

module.exports = Book;