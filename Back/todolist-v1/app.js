var express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

  //Test
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  var dayName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

  //list is located in /view/list.ejs
  res.render('list', {
    day: dayName[currentDay]
  });

});

app.post('/', function(req, res) {

})




app.listen(3000, function() {
  console.log('listening on port 3000');
});