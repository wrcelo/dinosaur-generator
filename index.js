
var express = require('express');
var app = express();
const port = 3000;
const fetch = require('node-fetch');

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});



app.get('/dinoname', async(request, response) => {
  getDinoName();
});

app.get('/dinoimage', async(request, response) => {
  getDinoImage();
});

