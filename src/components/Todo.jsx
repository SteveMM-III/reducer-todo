import React from 'react';

import { COMPLETE } from './reducers/Actions';

const Todo = props => {
  return (
    <div
      className={ `task${ props.task.completed ? ' completed' : '' }` }
      onClick={ () => props.dispatch( { type: COMPLETE, id: props.task.id } ) }
    >
      <p>{ props.task.task }</p>
    </div>
  );
};

export default Todo;