const Router = require('express').Router();
const Todo = require('../model/Todo');
var path = require('path');

Router.get('/', async (req, res) => {
  try {
    const dataFromDB = await Todo.find(); // Här tankar vi ner det som finns i data basem meh hjälp av find och Todo-model:en
    res.render('index.ejs', { dataFromDB: dataFromDB });
  } catch {
    return console.log(chalk.hex('#f000ff').bold('Something went wrong from file: ' + path.basename(__filename) + err));
  }
});

module.exports = Router;
