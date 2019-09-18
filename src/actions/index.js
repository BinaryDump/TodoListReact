import axios from "axios";
import { ActionTypes } from "./action-types";
const END_POINT = "http://localhost:3000";

export function getTodos() {
  return function(dispatch) {
    axios.get(`${END_POINT}/todos`).then(response => {
      dispatch({ type: ActionTypes.SELECTION, payload: response.data });
    });
  };
}

// export function addTodo(toAdd){

//   try{

//   console.log("todo", toAdd);
//   //debugger;
//   //return function(dispatch){
//     axios.post(`${END_POINT}/todos`, { todo: toAdd   })
//     .then(response => {
//       //this.setState({});
//       return response.data
//     })
//   //}

// }catch(e){
//   console.log("error", e);
// }
// }

export function addTodo(toAdd) {
  return function(dispatch){

  try {
    console.log("todo", toAdd);

    axios.post(`${END_POINT}/todos`, { todo: toAdd }).then(response => {
        //debugger;
        dispatch({ type: ActionTypes.ADD , response})
      
    });
    //}
  } catch (e) {
    console.log("error", e);
  }

}
}
