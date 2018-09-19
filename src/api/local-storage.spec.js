import { log } from "./logger";

import { MockStorage } from "../../test/mock-storage";
import { setLocalStorage, loadState, saveState }from "./local-storage";

jest.mock("./logger");

describe("local-storage", () => {
  let localStorage;
  beforeEach(() => {
    localStorage = new MockStorage();
    setLocalStorage(localStorage);
  });

  afterEach(() => {
    setLocalStorage(window.localStorage);
  });

  describe("loadState", () => {
    it("Logs errors and returns undefined.", () => {
      const error = new Error();
      localStorage.getItem.mockImplementation(() => { throw error; });

      const state = loadState();

      expect(state).not.toBeDefined();
      expect(log).toHaveBeenCalledTimes(1);
      expect(log).toHaveBeenCalledWith(error);
    });
  });
});