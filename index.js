const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/schema.js')

const app = express() 

app.set('port', process.env.PORT || 4000)
app.use(parser.json())
app.use(cors())

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
  })
  
