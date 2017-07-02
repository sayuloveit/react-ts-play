import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../common/type/todo';

let nextToDoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (text: string): IPayLoadAction<any, IToDo> => ({
    type: ADD_TODO as typeof ADD_TODO,
    payload: {
        id: nextToDoId++,
        text
    }
});

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const setVisibilityFilter = (filter: SHOW_ALL | SHOW_ACTIVE | SHOW_COMPLETED): IPayLoadAction<any, ITodoFilter> => ({
    type: SET_VISIBILITY_FILTER as typeof SET_VISIBILITY_FILTER,
    payload: {
        filter
    }
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = (id: number): IPayLoadAction<any, IToggleTodo> => ({
    type: TOGGLE_TODO as typeof TOGGLE_TODO,
    payload: {id}
});
