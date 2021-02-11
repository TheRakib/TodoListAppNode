const Router = require('express').Router();
const Todo = require('../model/Todo');
const chalk = require('chalk');
var path = require('path');

Router.get('/sort/latest', async (req, res) => {
  try {
    // let sorted = +req.query.sorted || 1;
    // let page = +req.query.page;
    // const id = req.params.id;
    const dataFromDB = await Todo.find().sort({ Date: -1 }); // Här tankar vi ner det som finns i data basem meh hjälp av find och Todo-model:en
    res.render('index.ejs', { dataFromDB: dataFromDB });
  } catch {
    return console.log(chalk.hex('#f000ff').bold('Something went wrong from file: ' + path.basename(__filename)));
  }
});
Router.get('/sort/oldest', async (req, res) => {
  try {
    const dataFromDB = await Todo.find().sort({ Date: 1 }); // Här tankar vi ner det som finns i data basem meh hjälp av find och Todo-model:en
    res.render('index.ejs', { dataFromDB: dataFromDB });
  } catch {
    return console.log(chalk.hex('#f000ff').bold('Something went wrong from file: ' + path.basename(__filename)));
  }
});

module.exports = Router;
