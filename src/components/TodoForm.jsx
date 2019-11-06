import React from 'react';
import uuid from 'uuid';

import { ADD } from './reducers/Actions';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ''
    };
  }

  handleChanges = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log( this.state.newTask );
    this.props.dispatch( { type: ADD, task: { task: this.state.newTask, id: uuid.v4(), completed: false } } );
    this.setState(  { newTask: '' } );
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="task">New Task</label>
        <input
          type="text"
          name="task"
          id="task"
          value={ this.state.newTask }
          onChange={ this.handleChanges }
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;