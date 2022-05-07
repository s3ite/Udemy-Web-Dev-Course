const express = require('express');
const app = express();


app.listen(3000, function() {
  console.log('listening on');
});

app.get('/', function(req, res) {
  res.send("Hello world");
});

app.get('/contact', function(req, res) {
  res.send("Pas trop la hein!!!");
});

app.get('/about', function(req, res) {
  res.send("Un geni incompris mais c'est pas trop grave");
});

app.get('/a', function(req, res) {
  res.send("Un geni gravement incodedpe");
});