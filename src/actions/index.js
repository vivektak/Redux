import { DATA_LOADED, API_URL, API_ERRORED } from "../constants";

export function getData() {
    return function (dispatch) {
        return fetch(API_URL)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            })
            .catch(error => {
                dispatch({ type: API_ERRORED })
            });
    };
};