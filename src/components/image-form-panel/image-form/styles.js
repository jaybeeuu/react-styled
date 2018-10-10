import colours from "../../styles/colours";
import * as constants from "../../styles/constants";

export const root = {
  padding: constants.padding.block
};

export const fieldGroup = {
  boxSizing: "border-box",
  width: "100%",
  padding: constants.padding.block
};

const sharedFormComponentStyles = {
  boxSizing: "border-box",
  padding: constants.padding.inline,
  display: "block",
  width: "100%",
  border: "none"
};

export const label = {
  ...sharedFormComponentStyles
};

export const field = {
  ...sharedFormComponentStyles
};

export const textarea = {
  ...field,
  resize: "none",
  height: "10rem"
};

export const closeButton = {
  color: colours.white,
  cursor: "pointer",
  background: "transparent",
  border: "none",
  fontSize: "3em",
  outline: "none"
};