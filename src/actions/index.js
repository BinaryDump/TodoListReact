import axios from "axios";
import { ActionTypes } from "./action-types";
const END_POINT = "http://localhost:3000";

export function getTodos(){
    return function(dispatch) {
        axios.get(`${END_POINT}/todos`).then(response => {
          dispatch({ type: ActionTypes.SELECTION , payload: response.data });
        });
      };
}