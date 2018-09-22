import preloader from "./preloader";

describe("preloader", () => {
  beforeEach(() => {
    window.fetch = jest.fn();
  });

  it("requests each of the urls parsed to it.", () => {
    const urls = [1, "2", { id: "3" }];

    preloader(...urls);

    expect(window.fetch.mock.calls).toEqual(urls.map(url => [url]));
  });
});