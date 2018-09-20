import { when } from "jest-when";
import { log } from "./logger";

import { MockStorage } from "../../test/mock-storage";
import { setLocalStorage, loadState, saveState }from "./local-storage";

jest.mock("./logger");

const STATE_KEY = "state";

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

    it("returns undefined if no state is found.", () => {
      when(localStorage.getItem).calledWith(STATE_KEY).mockReturnValue(null);

      const state = loadState();

      expect(state).not.toBeDefined();
    });

    it("returns the JSON.parsed state.", () => {
      const expectedState = {
        id: "{the expected state}",
        child: { id: "A child object" }
      };
      when(localStorage.getItem).calledWith(STATE_KEY).mockReturnValue(JSON.stringify(expectedState));

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