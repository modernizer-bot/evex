import { combineReducers } from "redux";
import users from "./userReducer.js";
import apiCallStatusReducer from "./apiStatusReducer.js";

const rootReducer = combineReducers({
  users,
  apiCallStatusReducer,
});

export default rootReducer;
