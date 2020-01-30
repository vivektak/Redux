import { DATA_LOADED } from "../constants";
import { ADD_ARTICLE } from "../constants";


function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

export function getData() {
    return function (dispatch) {
        return fetch(" https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            });
    };
}

export default addArticle;
