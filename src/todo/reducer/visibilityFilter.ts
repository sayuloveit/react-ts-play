import { SET_VISIBILITY_FILTER } from '../action';

export const visibilityFilter = (state = {filter: 'SHOW_ALL'}, action: IPayLoadAction<any, ITodoFilter>) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
};
