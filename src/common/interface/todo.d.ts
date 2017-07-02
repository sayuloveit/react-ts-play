interface IToDo {
    readonly id: number;
    readonly text: string;
    completed?: boolean;
}

interface ITodoFilter {
    readonly filter: 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'
}

interface IToggleTodo {
    readonly id: number;
}

interface ITodoState {
    readonly todos: IToDo[];
    readonly visibilityFilter: ITodoFilter
}
