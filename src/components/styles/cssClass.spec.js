import classNames from "classnames";
import cssClass from "./cssClass";

describe("cssClass", () => {
  it("returns a function which returns the class supplied.", () => {
    const cssClassName = "{cssClassName}";

    const wrapper = cssClass(cssClassName);

    expect(wrapper()).toBe(cssClassName);
  });

  it("returns a function with a modifier function attached which returns the cssClass with the modifier in the BEM style.", () => {
    const cssClassName = "{cssClassName}";
    const modifier = "{modifier}";

    const wrapper = cssClass(cssClassName);

    expect(wrapper.modifier(modifier)).toBe(`${cssClassName}--${modifier}`);
  });

  it("returns a function with an element function attached which returns the cssClass with the element in the BEM style.", () => {
    const cssClassName = "{cssClassName}";
    const element = "{element}";

    const wrapper = cssClass(cssClassName);

    expect(wrapper.element(element)).toBe(`${cssClassName}__${element}`);
  });
});