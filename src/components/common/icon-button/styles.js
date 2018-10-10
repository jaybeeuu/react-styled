import radium from "radium";
import { durations } from "../../styles/constants";
import * as mixins from "../../styles/mixins";

const spin = radium.keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}, "IconButton");

export const button = {
  ...mixins.textOverlay,
  border: "none",
  ":hover": { background: "red" }
};

export const icon = {
  default: { display: "inline-block" },
  parentHovered: {
    animation: `${spin} ${durations.complex} ease`
  }
};
