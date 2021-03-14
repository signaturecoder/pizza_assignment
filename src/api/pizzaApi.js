import { handleResponse, handleError } from './apiUtils';

export function getPizza() {
  return fetch(`${process.env.REACT_APP_API_URL}`)
    .then(handleResponse)
    .catch(handleError);
}
