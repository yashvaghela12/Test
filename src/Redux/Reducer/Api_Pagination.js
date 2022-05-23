import { FETCH_DATA } from "../Actions/Action";
import { ActionTypes } from "../Constants/Constants";

const intialState = {
  dataItems: [],
};

const Reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA:
      return console.log("data Get");
    default:
      return state;
  }
};
export default Reducer;
