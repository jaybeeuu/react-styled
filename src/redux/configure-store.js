import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root";

export default (initialState) => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk),
    initialState
  );
};