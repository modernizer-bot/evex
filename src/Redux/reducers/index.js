import { combineReducers } from "redux";
import users from "./userReducer";
import apiCallStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  users,
  apiCallStatusReducer,
});

export default rootReducer;
