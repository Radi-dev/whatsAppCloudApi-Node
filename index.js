const express = require('express')
const axios = require('axios').default;

const app = express()

app.get('/', function (req, res) {
  res.send('World')
})

app.listen(3000)