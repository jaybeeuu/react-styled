import reducer from "./reducer";
import * as actions from "./actions";
import * as selectors from "./selectors";

const localStateAsGlobal = (localState = {}) => ({
  ui: localState
});

describe("ui", () => {
  describe("reducer", () => {
    it("has the expected default value of is editing", () => {
      const defaultState = reducer();

      expect(defaultState.isEditing).toEqual(false);
    });

    it("has the expected default value of selectedImageId", () => {
      const defaultState = reducer();

      expect(defaultState.selectedImageId).toEqual(0);
    });
  });

  describe("actions", () => {
    describe("setSelectedImageId", () => {
      it("updates teh correct part of the store.", () => {
        const finalState = reducer({ selectedImageId: 0 }, actions.setSelectedImageId(1));

        expect(selectors.getSelectedImageId(localStateAsGlobal(finalState))).toBe(1);
      });
    });
  });
});