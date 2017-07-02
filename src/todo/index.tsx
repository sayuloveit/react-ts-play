import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { default as todoApp } from './reducer';
import { Footer } from './component/footer';
import { default as AddTodo } from './container/add-todo';
import { VisibleTodoList } from './container/visible-todo-list';

const store = createStore(todoApp);

const App = () => (

  <Provider store={store}>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        
      </div>
  </Provider>

);

export default App;