import { combineReducers } from "redux";
import dataReducer from "../Reducer/Api_Pagination";

// All the reducers are combined here

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
