import { log } from "./logger";

import { loadState, saveState } from "./local-storage";
import { mockLocalStorage } from "../../test/mock-storage";

const noop = () => {};

describe("local-storage", () => {
  mockLocalStorage();

  const stubLocalStorageFunctions = (accessors = {}) => {
    const { get = noop, set = noop } = accessors;

    // eslint-disable-next-line no-console
    console.log(localStorage.getItem);
    const someObj = {
      getItem: () => {}
    };

    jest.spyOn(someObj, "getItem").mockImplementation(() => log("It worked!"));

    someObj.getItem();
  };

  describe("loadState", () => {
    it("Logs errors and returns undefined.", () => {
      stubLocalStorageFunctions();
    });
  });
});