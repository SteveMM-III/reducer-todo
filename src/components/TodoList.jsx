import React from 'react';
import uuid from 'uuid';

import { CLEAR } from './reducers/Actions';
import Todo from './Todo';

const TodoList = props => {

  console.log( props );

  const clearCompleted = () => {
    props.dispatch( { type: CLEAR, todos: props.todos } );
  };

  return (
    <div className="todo-list">
      {
        props.todos.map( task => (
          <Todo
            key={ uuid.v4() }
            task={ task }
            dispatch={ props.dispatch }
          />
        ))
      }
      <button className="clear-btn" onClick={ clearCompleted }>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
