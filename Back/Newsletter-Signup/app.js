const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

//API KEYS
//MAilChimp : 1bd9c9fe93950e4a7edd439404b19619-us17
const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}))
//Using static files
app.use(express.static("public"))

app.listen(3000, function() {
  console.log("listening on port 3000");
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/signup.html')
})

app.post('/', function(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  res.sendFile(__dirname + '/success.html')
  console.log(firstName + " " + lastName + " " + email);
})