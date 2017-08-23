const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost:27017/*CHANGE THIS TO REFLECT DB NAME*');


const app = express();


// Replace "test" with your database name.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

let hardCodedArray = [{
    'name': 'Mario Party',
    'general': {
      'platform': ['pc', 'xbox', 'ps4']
      'genre': ['minigames', 'party', 'shooter', 'puzzle', 'strategy']
      'numberOfPlayers': 1 - 8,
    }
  },
  {
    'name': 'Legend of Zelda',
    'general': {
      'platform': ['nintendo', 'ds']
      'genre': ['minigames', 'party', 'shooter', 'puzzle', 'strategy']
      'numberOfPlayers': 1 - 8,
    }
  }
  {
    'name': 'Gears of War',
    'general': {
      'platform': ['xbox', 'ps4', 'pc']
      'genre': ['shooter']
      'numberOfPlayers': 1 - 8,
    }
  }
]

app.get('/', function(req, res) {
  console.log('phil get');
  console.log('line 75');




app.listen(3000, function() {
  console.log('Successfully started express application!');
})
