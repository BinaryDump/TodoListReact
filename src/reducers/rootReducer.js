import { combineReducers } from 'redux';
import Todos from './todoReducer';

// const initState = combineReducers( {
//     todos : TodoList
// });

// const rootReducer = (state = initState, action) => {
//     return state;
// };

const rootReducer = combineReducers({
    todos : Todos,
  
});

export default rootReducer;
