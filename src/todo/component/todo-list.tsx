import * as React from 'react';

import { ToDo } from './todo';

export interface IToDoListProps {
    todos: IToDo[];
    onToDoClick: any;
}

export const ToDoList: React.StatelessComponent<IToDoListProps> = ({ todos, onToDoClick }) => (
   <ul>
       {todos.map(todo =>
            <ToDo
                key={todo.id}
                {...todo}
                onClick={onToDoClick}
            />
       )}
   </ul>
); 