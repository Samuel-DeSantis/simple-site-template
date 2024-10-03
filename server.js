const express = require('express')
const expressLayouts = require('express-ejs-layouts')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(expressLayouts)
app.use(express.static('public'))

app.set('layout', './layouts')
app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
  res.render('home/page')
})

app.listen(PORT)