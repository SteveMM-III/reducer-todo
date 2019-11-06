import { ADD, COMPLETE, REMOVE, CLEAR } from './Actions';

export const initialState = [
  {
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export const appReducer = ( state, action ) => {
  switch ( action.type ) {
    case ADD:
      return [ ...state, action.task ];
    case COMPLETE:
      return state.map( e => e.id === action.id ? { ...e, completed: !e.completed } : e );
    case REMOVE:
      return state.filter( e => e.id !== action.id );
    case CLEAR:
      return action.todos.filter( e => !e.completed );
    default:
      throw new Error("No action matched!");
  }
};