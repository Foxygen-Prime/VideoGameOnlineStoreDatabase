const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/*CHANGE THIS TO REFLECT DB NAME*');


const app = express();


// Replace "test" with your database name.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')



app.listen(3000, function() {
  console.log('Successfully started express application!');
})
