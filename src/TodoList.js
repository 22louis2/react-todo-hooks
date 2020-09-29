import React, {useContext} from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';
import {TodosContext} from './contexts/TodosContext';

function TodoList() {
    const todos = useContext(TodosContext);
    if(todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    // To add a key to a fragment, we have to use the long-hand version
                    // rather than <> </>, we have to use <React.Fragment>
                    <React.Fragment key={i}>
                        <Todo {...todo} key={todo.id} />
                        {i < todos.length - 1 && <Divider/>}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
    return null;
}

export default TodoList;
