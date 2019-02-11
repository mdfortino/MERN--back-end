const mongoose = require('./models.js')
const Bookmark = mongoose.model('Bookmark')
const bookmarkData = require('./bookmark-data.json')


Bookmark.remove({})
  .then(() => {
    Bookmark.collection.insert(bookmarkData)
      .then((bookmarks) => {
        console.log(bookmarks)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
