import * as mixins from "../styles/mixins";

export const root = {
  height: "100%",
  position: "relative"
};

const navButtonDefault = {
  ...mixins.transitions.complex,
  fontSize: "5em",
  border: "none",
  cursor: "pointer",
  outline: "none",
  zIndex: 1,
  // opacity: 0,
  position: "absolute",
  top: 0,
  bottom: 0,

  ":hover": {
    background: "red"
    // opacity: 1,
  }
};

export const navButton = {
  left: {
    ...navButtonDefault,
    left: 0
  },
  right: {
    ...navButtonDefault,
    right: 0
  },
};