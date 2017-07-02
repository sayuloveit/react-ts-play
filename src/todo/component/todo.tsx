import * as React from 'react';

export interface IToDoProps extends IToDo {
    key?: number;
    onClick?: any;
}

export const ToDo: React.StatelessComponent<IToDoProps> = ({ onClick, completed, text }) => (
    <li 
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
);
