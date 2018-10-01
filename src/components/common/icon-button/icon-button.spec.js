import React from "react";
import { shallow } from "enzyme";
import "../../../../test/setup-enzyme";
import IconButton from "./icon-button";

describe("icon-button", () => {
  const defaultProps = {
    className: "{prop_className}",
    icon: "prop_className",
    onClick: function propOnClick() {}
  };

  it("shallow renders", () => {
    shallow(<IconButton {...defaultProps} />);
  });
});