import { combineReducers } from 'redux';
import TodoList from './todoReducer';

// const initState = combineReducers( {
//     todos : TodoList
// });

// const rootReducer = (state = initState, action) => {
//     return state;
// };

const rootReducer = combineReducers({
    todos : TodoList
});

export default rootReducer;
