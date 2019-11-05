export const initialState = [
  {
    item: 'Learn about reducers',
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
    case value:
      
      break;
  
    default:
      throw new Error("No action matched!");
  }
};