const mongoose = require('./connection.js')

const BookmarkSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String
    
})

const Bookmark = mongoose.model('Bookmark', BookmarkSchema)

module.exports = {
    Bookmark
}