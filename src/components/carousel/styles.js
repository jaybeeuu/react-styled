import * as mixins from "../styles/mixins";

export const root = {
  height: "100%",
  position: "relative"
};

export const navButton = {
  default: {
    ...mixins.transitions.complex,
    ...mixins.textOverlay,
    fontSize: "5em",
    border: "none",
    cursor: "pointer",
    outline: "none",
    zIndex: 1,
    opacity: 0,
    position: "absolute",
    top: 0,
    bottom: 0,
  },
  left: {
    left: 0
  },
  right: {
    right: 0
  },
  hover: (hovered) => hovered ? { opacity: 1 } : {}
};