import { connect } from 'react-redux';
import { toggleTodo } from '../action';

import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../../common/type/todo';
import { ToDoList } from '../component/todo-list';

const getVisibleTodos = (todos: IToDo[], filter: SHOW_ACTIVE | SHOW_ALL | SHOW_COMPLETED) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state: ITodoState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter.filter)
});

const mapDispatchToProps = ({
  onTodoClick: toggleTodo
});

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
