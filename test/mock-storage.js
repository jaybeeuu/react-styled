class MockStorage {
  constructor() {
    this.store = {};
    this.setItem = (key, val) => this.store[key] = val;
    this.getItem = (key) => this.store[key];
    this.removeItem = (key) => delete this.store[key];
    this.clear = () => this.store = {};
  }
}

export const mockLocalStorage = () => {
  const originalLocalStorage = window.localStorage;
  beforeEach(() => {
    window.localStorage = new MockStorage();
  });

  afterEach(() => {
    window.localStorage = originalLocalStorage;
  });
};
