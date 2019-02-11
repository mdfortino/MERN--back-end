const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/models.js')

const app = express() 

app.set('port', process.env.PORT || 4000)
app.use(parser.json())
app.use(cors())

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
  })
  
  app.get('/api/bookmarks', (req, res) => {
    Bookmark.find()
      .then((bookmarks) => {
        res.json(bookmarks)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  app.post('/api/bookmarks', (req,res) => {
      Bookmark.create(req.body)
      .then((bookmark) => {
          res.json(bookmark)
      })
      .catch((err)=> {
          console.log(err)
      })
  }) 

  app.get('/api/bookmarks/:id', (req, res) => {
    Bookmark.findById(req.params.id)
      .then((bookmark) => {
        res.json(bookmark)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  app.delete('api/bookmarks/:id', (req, res) => {
      Bookmark.findOneAndRemove({_id: req.params.id})
      .then(bookmark => {
        res.json(bookmark)
      })
      .catch((err) => {
          console.log(err)
      })
  })

 
app.put('api/bookmarks/:id', (req, res)=> {
    Bookmark.findOneAndUpdate({_id: req.params.id})
    .then(bookmark => {
        res.json(bookmark)
    })
    .catch((err)=> {
        console.log(err)
    })
})