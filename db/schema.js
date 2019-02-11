const mongoose = require('./connection.js')

const BookmarkSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String
})

mongoose.model("Bookmark", BookmarkSchema)

module.exports = mongoose
