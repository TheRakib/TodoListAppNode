const Router = require('express').Router();
const chalk = require('chalk');
const Todo = require('../model/Todo');
var path = require('path');

Router.get('/deleteToDo/:id', async (req, res) => {
  try {
    const removeToDo = req.params.id;
    await Todo.deleteOne({ _id: removeToDo });
    console.log(chalk.cyan.bold('Removed a todo Successfully'));
    res.redirect('/');
  } catch {
    return console.log(chalk.hex('#f000ff').bold('Something went wrong from file: ' + path.basename(__filename) + err));
  }
});

module.exports = Router;
