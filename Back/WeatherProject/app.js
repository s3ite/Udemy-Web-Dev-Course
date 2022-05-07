const express = require('express')
const https = require('node:https')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function() {
  console.log('listening on port 3000')
})


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res) {
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const appId = "df63c1f3f846c6f2ee74e7c5df5bfb1e"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appId + "&units=" + unit;


  https.get(url, function(response) {
    response.on('data', function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const desc = weatherData.weather[0].description

      const icon = weatherData.weather[0].icon
      const imageUrl = "https://api.openweathermap.org/img/wn/" + icon + "@2x.png"

      res.write("<p>" + desc + "</p>")
      res.write("<h1>The temperature in " + query + " is " + temp + "</h1>")
      res.write("<img src=" + imageUrl + ">")

      res.send()
    })
  })
})