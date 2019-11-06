import React, { useReducer } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from "./components/TodoList";

import { initialState, appReducer } from './components/reducers/Reducer';

function App() {
  const [ todos, dispatch ] = useReducer( appReducer, initialState );

  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <TodoForm dispatch={ dispatch } />
      </div>
      <TodoList
        dispatch={ dispatch }
        todos={ todos }
      />
    </div>
  );
}

export default App;
