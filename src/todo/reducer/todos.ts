import { ADD_TODO, TOGGLE_TODO } from '../action';

const todo = (state: IToDo, action: IPayLoadAction<{}, IToDo & IToggleTodo>): IToDo => {
    switch (action.type) {
        case ADD_TODO:
            const { id, text } = action.payload;
            return {
                id,
                text,
                completed: false
            };
        case TOGGLE_TODO:
            if (state.id !== action.payload.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

export const todos = (state: IToDo[] = [], action: IPayLoadAction<any, IToDo & IToggleTodo>): IToDo[] => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined as any, action)
            ];
        case TOGGLE_TODO:
           return state.map(t => todo(t, action));
        default:
            return state;
    }
};
