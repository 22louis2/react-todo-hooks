import uuid from 'uuid/v4';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, {id: uuid(), task: action.task, completed: false}];
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE':
            return state.map(todo => 
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            );
        case 'EDIT':
            return state.map(todo => 
                todo.id === action.id ? {...todo, task: action.newTask} : todo
            );
        default: 
                return state;
    }
};

export default reducer;

// const addTodo = newTodoText => {
//     setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
// };
// const removeTodo = todoId => {
//     // filter out removed todo
//     const updatedTodos = todos.filter(todo => todo.id !== todoId);
//     // call setTodos with new todos array
//     setTodos(updatedTodos);
// };
// const toggleTodo = todoId => {
//     const updatedTodos = todos.map(todo => 
//         todo.id === todoId ? {...todo, completed: !todo.completed} : todo
//     );
//     setTodos(updatedTodos);
// };
// const editTodo = (todoId, newTask) => {
//     const updatedTodos = todos.map(todo => 
//         todo.id === todoId ? {...todo, task: newTask} : todo
//     );
//     setTodos(updatedTodos);
// }