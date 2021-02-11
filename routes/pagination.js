const router = require('express').Router();
const chalk = require('chalk');
const Router = require('express').Router();
const Todo = require('../model/Todo');
var path = require('path');

Router.get('/'),
  async (req, res) => {
    const page = +req.query.page;

    try {
      const totalData = await Todo.find().count();

      const dataToShowPerReq = 2;

      const totalDataPart = totalData / dataToShowPerReq;

      const dataToShow = dataToShowPerReq * page;

      const dataFromDB = await Todo.find().limit(dataToShow);

      res.render('index.js', { dataFromDB, totalDataPart, dataToShow, dataToShowPerReq, totalData });
    } catch {
      return console.log(chalk.hex('#f000ff').bold('Something went wrong from file: ' + path.basename(__filename) + err));
    }
  };

module.exports.Router;
