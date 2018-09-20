import { log } from "./logger";

let localStorage = window.localStorage;

const STATE_KEY = "state";

export const setLocalStorage = (implementation) => localStorage = implementation || window.localStorage;

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE_KEY);

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
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (err) {
    log(err);
  }
};