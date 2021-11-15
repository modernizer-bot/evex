import * as actionTypes from "../actionTypes.js";

export function beginApiCall() {
  return {
    type: actionTypes.BEING_API_CALL,
  };
}
