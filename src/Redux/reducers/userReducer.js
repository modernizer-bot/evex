import * as actionTypes from "../actionTypes.js";

const initialState = [];
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.payload }];
    case actionTypes.LOAD_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
}
