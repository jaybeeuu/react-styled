import { debounce } from "./debounce";


describe("debounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("the returned function does not execute the actor until after the supplied delay.", () => {
    const actor = jest.fn().mockName("actor");
    const delay = 200;

    debounce(actor, delay)();
    jest.advanceTimersByTime(delay - 1);

    expect(actor).not.toHaveBeenCalled();
  });

  it("the returned function schedules the execution of the actor after the supplied delay.", () => {
    const actor = jest.fn().mockName("actor");
    const delay = 200;

    debounce(actor, delay)();
    jest.advanceTimersByTime(delay);

    expect(actor).toHaveBeenCalledTimes(1);
  });

  it("the returned function only schedules the execution of the actor once within the delay.", () => {
    const actor = jest.fn().mockName("actor");
    const delay = 200;
    const debounced = debounce(actor, delay);

    debounced();
    jest.advanceTimersByTime(delay / 2);
    debounced();
    debounced();
    jest.advanceTimersByTime(delay / 2);

    expect(actor).toHaveBeenCalledTimes(1);
  });

  it("the returned function will reschedule the actor if it is call after execution.", () => {
    const actor = jest.fn().mockName("actor");
    const delay = 200;
    const debounced = debounce(actor, delay);

    debounced();
    jest.advanceTimersByTime(delay);
    debounced();
    jest.advanceTimersByTime(delay);

    expect(actor).toHaveBeenCalledTimes(2);
  });
});