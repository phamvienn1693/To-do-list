const fs = require('fs');

// add a todo item //
const addTodo = (title) => {
    const todos = fetchTodos();
    const todo = {
        title
    };  
        todos.push(todo);
        saveTodos(todos);
        return todo;
};

// delete a todo item //
const deleteTodo = (title) => {
    const todos = fetchTodos();
    const filteredtodos = todos.filter((todo) => todo.title !== title);
    saveTodos(filteredtodos);
    return todos.length !== filteredtodos.length;
};


// list all todo items //
const listTodos = () => {
    return fetchTodos();
};

// utility functions
const fetchTodos = () => {
    try {
        const todosString = fs.readFileSync('todos-data.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};

const saveTodos = (todos) => {
    fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

const logTodo = (todo) => {
    console.log('------');
    console.log(`title is: ${todo.title}`);
};

// exported functions
module.exports = {
    addTodo,
    deleteTodo,
    listTodos,
    logTodo
};