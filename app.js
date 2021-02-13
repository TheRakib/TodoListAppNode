const chalk = require('chalk'); // Denna navänds för att ändra färg i terminalen.

const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();


const ConectionString = process.env.MongoDbURL; // Har sparat dessa värden  i env-filen

const port = process.env.PORT; // Har sparat dessa värden i env-filen

const Todo = require('./model/Todo'); // importerat todo scheman från model mappen.

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// connectiong to DB
mongoose.connect(ConectionString, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(chalk.redBright.bold('could not connect to the data base'));
    return;
  }
  console.log(chalk.magentaBright('Connected to the DB'));
});

// linking routes
app.use(require('./routes/index'));
app.use(require('./routes/addToDo'));
app.use(require('./routes/removeToDo'));
app.use(require('./routes/editToDo'));
app.use(require('./routes/sorting'));
// app.use(require('./routes/pagination'));

app.listen(port, () => {
  console.log(chalk.blue.bold('Server is running on port: ' + port));
});
