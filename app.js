const fs = require('fs');
const yargs = require('yargs');

const todos = require('./todos.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Running Command: ', command);

if (command === 'addTodo') {
    todos.addTodo(argv.title);
} else if (command === 'deleteTodo') {
    const todoDeleted = todos.deleteTodo(argv.title);
    console.log('title was deleted');
} 
 else if (command === 'listTodos') {
    const allTodos = todos.listTodos();
    allTodos.forEach((todo) => todos.logTodo(todo));
} else {
    console.log('Invalid command.');
} 
 
 
 
