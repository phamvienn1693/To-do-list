const fs = require('fs');
const yargs = require('yargs');

const todos = require('./todolist.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Running Command: ', command);

if (command === 'addTodo') {
    //todos.addTodo(argv.todo);
    console.log(`title`, todos);
}  
 else if (command === 'listTodos') {
    const allTodos = todos;
    allTodos.forEach((todo) => todos.logTodo(todo));
} else {
    console.log('Invalid command.');
} 
 
 
 