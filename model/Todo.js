const monogoose = require('mongoose');

const TodoSchema = new monogoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = monogoose.model('todos', TodoSchema);

module.exports = Todo;
