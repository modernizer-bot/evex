import { handleResponse, handleError } from "./apiUtils";
const baseUrl = `${process.env.API_URL}/users/`;

export function getUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function postUser(user) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function putUser(user) {
  return fetch(baseUrl, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteUser(id) {
  return fetch(`${baseUrl}${id}`, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
}
