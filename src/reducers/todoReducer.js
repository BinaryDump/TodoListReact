import { ActionTypes } from '../actions/action-types'

export default function reducerTodos(state = [], action){
   // debugger;
    switch(action.type){
        case ActionTypes.SELECTION :
            return action.payload;
        case ActionTypes.ADD :
            //debugger;
                return [...state, action.response.data]
    }
    return state;
}