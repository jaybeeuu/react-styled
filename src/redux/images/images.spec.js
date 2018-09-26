import * as fromImages from "./selectors";
import reducer from "./reducer";

const localStateAsGlobal = (localState = {}) => ({
  images: localState
});

describe("images", () => {
  describe("reducer", () => {
    it("has the expected default state", () => {
      const defaultState = reducer();

      expect(defaultState).toEqual({});
    });
  });

  describe("selectors", () => {
    describe("getAllUrls", () => {
      it("returns an empty array if there are no images in state.", () => {
        const allImages = fromImages.getAllUrls(localStateAsGlobal());

        expect(allImages).toEqual([]);
      });

      it("returns an array containing all the url's of the images in state.", () => {
        const allImages = fromImages.getAllUrls(localStateAsGlobal({
          1: { id: "image 1", url: "url 1" },
          2: { id: "image 2", url: "url 2" },
          3: { id: "image 3", url: "url 3" }
        }));

        expect(allImages).toEqual(["url 1", "url 2", "url 3"]);
      });
    });

    describe("getImage", () => {
      it("returns null if there are no images in state with the supplied Id.", () => {
        const image = fromImages.getImage(localStateAsGlobal({
          "a different Id": { id: "{a different Id}" }
        }), "missing id");

        expect(image).toEqual(null);
      });

      it("returns the image in state with the supplied  id's of the images in state.", () => {
        const image = fromImages.getImage(localStateAsGlobal({
          "image 1": { id: "image 1" },
          "image 2": { id: "image 2" },
          "image 3": { id: "image 3" }
        }), "image 1");

        expect(image).toEqual({ id: "image 1" });
      });
    });
  });
});