import * as fromImages from "./selectors";

const localStateAsGlobal = (localState = {}) => ({
  images: localState
});

describe("selectors", () => {
  describe("getAllImageIds", () => {
    it("returns an empty array if there are no images in state.", () => {
      const allImages = fromImages.getAllIds(localStateAsGlobal());

      expect(allImages).toEqual([]);
    });

    it("returns an array containing all the id's of the images in state.", () => {
      const allImages = fromImages.getAllIds(localStateAsGlobal({
        1: { id: "image 1" },
        2: { id: "image 2" },
        3: { id: "image 3" }
      }));

      expect(allImages).toEqual(["1", "2", "3"]);
    });
  });

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

      expect(allImages).toEqual(["url 1", "url 2", "url 3"]);url
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