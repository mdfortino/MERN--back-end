const mongoose = require('./connection.js')

const BookmarkSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String
    
})

module.exports = mongoose.model('Bookmark', BookmarkSchema)
