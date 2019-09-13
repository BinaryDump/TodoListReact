import { ActionTypes } from '../actions/action-types'

export default function reducerTodos(state = [], action){
    switch(action.type){
        case ActionTypes.SELECTION :
            return action.payload;
    }
    return state;
}