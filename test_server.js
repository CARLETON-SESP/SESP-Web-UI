const express = require('express')
const app = express()
const port = 3031
let request = require('request');
let apiKey = '14029a424aec0b463967f1efd7768019';
let city = 'Iqaluit';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      delete weather.base;
      delete weather.main.visibility;
      delete weather.timezone;
      delete weather.cod;
      delete weather.id;
      delete weather.sys;
      delete weather.coord;
      var json = JSON.stringify(weather)
    }
    app.get('/', (req, res) => res.send({json}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  });



