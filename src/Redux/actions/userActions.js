import * as actionTypes from "../actionTypes.js";
import * as userApi from "../../api/usersApi.js";
import { beginApiCall } from "./apiStatusActions.js";

export function loadUsersSuccess(users) {
  return {
    type: actionTypes.LOAD_USERS_SUCCESS,
    users: users,
  };
}

export function createUserSuccess(user) {
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    user,
  };
}

export function loadUsers() {
  return async function (dispatch, getState) {
    dispatch(beginApiCall());
    const users = await userApi.getUsers();
    dispatch(loadUsersSuccess(users));
  };
}

export function saveUser(user) {
  return async function (dispatch) {
    dispatch(beginApiCall());
    return userApi.postUser(user).then((savedUser) => {
      dispatch(createUserSuccess(savedUser));
    });
  };
}
