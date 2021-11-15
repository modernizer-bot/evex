import * as actionTypes from "../actionTypes";

export function beginApiCall() {
  return {
    type: actionTypes.BEING_API_CALL,
  };
}
