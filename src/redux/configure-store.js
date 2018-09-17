import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./ducks/root";

export default () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
};