import { log } from "./logger";

let localStorage = window.localStorage;

export const setLocalStorage = (implementation) => localStorage = implementation || window.localStorage;

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");

    return serializedState === null
      ? undefined
      : JSON.parse(serializedState);
  } catch (err) {
    log(err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    log(err);
  }
};