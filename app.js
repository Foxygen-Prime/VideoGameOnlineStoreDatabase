const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const videoGameData = require('./Models/schema.js')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/videoGameLibrary');


const app = express();


// Replace "test" with your database name.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

// const exampleGameEntry =
// new videoGameData ({name : 'Shadow of the Colossus', platform :['pc', 'ps4']});
// console.log(exampleGameEntry);
//
// exampleGameEntry.save()

// exampleGameEntry.save(function (err)){
//   if (err) return console.log(err);
// }

// app.get object: { tempObject : hardCodedArray }

// let hardCodedArray = [{
//     'name': 'Mario Party',
//     'general': {
//       'platform': ['pc', 'xbox', 'ps4'],
//       'genre': ['minigames', 'party', 'shooter', 'puzzle', 'strategy'],
//       'numberOfPlayers': '1 - 8',
//     }
//   },
//   {
    // 'name': 'Legend of Zelda',
    // 'general': {
    //   'platform': ['nintendo', 'ds'],
    //   'genre': ['minigames', 'party', 'shooter', 'puzzle', 'strategy'],
    //   'numberOfPlayers': '1 - 8',
//     }
//   },
//   {
//     'name': 'Gears of War',
//     'general': {
//       'platform': ['xbox', 'ps4', 'pc'],
//       'genre': ['shooter'],
//       'numberOfPlayers': '1 - 8',
//     }
//   }
// ]


app.get('/', function(req, res) {
  console.log('we are able to display information from database and collection');
  videoGameData.find().then(function (videogamedatas){
  res.render('index', {object : videogamedatas})
})
});

// app.post('/', function(req, res){
//   let newUserInput = req.body.userInput;
// console.log();
//   res.send(html);
// });





app.listen(3000, function() {
  console.log('Successfully started express application!')
})

process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});
