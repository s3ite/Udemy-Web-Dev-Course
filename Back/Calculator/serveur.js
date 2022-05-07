const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function() {
  console.log('listening on port 3000');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmiCalculator', function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / height * height;

  res.send("Votre imc est de : " + bmi)
})