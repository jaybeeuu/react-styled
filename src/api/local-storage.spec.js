import log from "./logger";

import { MockStorage } from "../../test/mock-storage";
import { setLocalStorage, loadState, saveState }from "./local-storage";

import defaultState from "./default-state.json";

jest.mock("./logger");

describe("local-storage", () => {
  let localStorage;

  beforeEach(() => {
    localStorage = new MockStorage();
    setLocalStorage(localStorage);
  });

  afterEach(() => {
    setLocalStorage();
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

    it("returns default-state if no state is found.", () => {
      localStorage.getItem.mockReturnValue(null);

      const state = loadState();

      expect(state).toBe(defaultState);
    });

    it("returns the JSON.parsed state.", () => {
      const expectedState = {
        id: "{the expected state}",
        child: { id: "A child object" }
      };
      localStorage.getItem.mockReturnValue(JSON.stringify(expectedState));

      const state = loadState();

      expect(state).toEqual(expectedState);
    });
  });

  describe("saveState", () => {
    it("Logs errors.", () => {
      const error = new Error();
      localStorage.setItem.mockImplementation(() => { throw error; });

      saveState({});

      expect(log).toHaveBeenCalledTimes(1);
      expect(log).toHaveBeenCalledWith(error);
    });

    it("stores the JSON.parsed state.", () => {
      const state = {
        id: "{the expected state}",
        child: { id: "A child object" }
      };

      saveState(state);

      expect(localStorage.setItem).toBeCalledTimes(1);
      expect(localStorage.setItem).toBeCalledWith("state", JSON.stringify(state));
    });
  });
});