const Router = require('express').Router();
const chalk = require('chalk');
const Todo = require('../model/Todo');

Router.get('/editToDo/:id', async (req, res) => {
  try {
    const toBeEdited = req.params.id;
    const TodoFromDB = await Todo.find();

    res.render('edit.ejs', { TodoFromDB: TodoFromDB, toBeEdited });
    Router.post('/edit/todo/:id', async (req, res) => {
      const changedTodo = await Todo.updateOne({ _id: req.params.id }, { Name: req.body.Name });
      console.log(chalk.hex('#ffe700').bold('Updated a todo Successfully'));
      res.redirect('/');
    });
  } catch {
    return console.log(chalk.hex('#f000ff').bold('Something went wrong from file: ' + path.basename(__filename) + err));
  }
});
module.exports = Router;
