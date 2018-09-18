import { log } from "./logger";

describe("logger", () => {
  describe("log", () => {
    it("passes everything onto the clonsole log function.", () => {
      jest.spyOn(console, "log").and.callFake(() => {});

      const args = [1, "2", { id: 3 }];

      log(args);

      // eslint-disable-next-line no-console
      expect(console.log).toHaveBeenCalledWith(args);
    });
  });
});
