var express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

var newItems = [];

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

  //Test
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  //list is located in /view/list.ejs
  res.render('list', {
    day: day,
    listItem: newItems
  });

});

app.post('/', function(req, res) {

  newItems.push(req.body.newItem);
  res.redirect('/')

})

app.listen(3000, function() {
  console.log('listening on port 3000');
});