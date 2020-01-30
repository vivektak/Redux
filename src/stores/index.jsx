import { createStore, applyMiddleware } from "redux";
import rootReducers from '../reducers/index';
import thunk from "redux-thunk";
import { forbiddenWordsMiddleware } from "../middleware";
import { composeWithDevTools } from "redux-devtools-extension";



const store = createStore(rootReducers,
    composeWithDevTools(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;
