import * as React from 'react';

import { ToDo } from './todo';

export interface IToDoListProps {
    todos: IToDo[];
    onTodoClick: any;
}

export const ToDoList: React.StatelessComponent<IToDoListProps> = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo: IToDo) =>
            <ToDo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);
