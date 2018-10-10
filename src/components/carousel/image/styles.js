import colours from "../../styles/colours";
import * as constants from "../../styles/constants";
import * as mixins from "../../styles/mixins";

export const root = {
  position: "relative",
  height: "100%"
};

const hidden = { opacity: 0 };
const shown = { opacity: 1 };

export const detailsContainer = {
  default: { ...mixins.transitions.complex },
  entering: hidden,
  entered: shown,
  exiting: hidden,
  exited: hidden
};

export const title = {
  padding: constants.padding.block,
  ...mixins.textOverlay,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  margin: 0,
  display: "flex",
  flexDirection: "row",
};

export const editButton = {
  backgroundColor: "transparent",
  color: colours.white,
  outline: "none",
  border: "none",
  margin: "0.5em",
  fontSize: "2em",
  cursor: "pointer"
};

export const details = {
  padding: constants.padding.block,
  ...mixins.textOverlay,
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  margin: 0
};

export const image = {
  objectFit: "contain",
  height: "100%",
  width: "100%"
};

export const description = {
  margin: 0,
  padding: constants.padding.block
};

export const tags = {
  display: "flex",
  margin: 0,
  padding: constants.padding.block
};

export const tag = {
  padding: "0.2em 0.6em",
  margin: "0 0.5em",
  listStyle: "none",
  borderRadius: "0.2em",
  color: colours.black,
  backgroundColor: colours.white
};