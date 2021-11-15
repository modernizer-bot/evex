import * as actionTypes from "../actionTypes.js";
import initialState from "./initialState.js";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  return action.type === actionTypes.BEING_API_CALL
    ? ++state
    : actionTypeEndsInSuccess(action.type)
    ? --state
    : state;
}
