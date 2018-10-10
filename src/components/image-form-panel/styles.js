import * as mixins from "../styles/mixins";

const hidden = { width: 0 };
const shown = { width: "20em" };

export const form = {
  default: {
    ...mixins.transitions.complex
  },
  entering: hidden,
  entered: shown,
  exiting: hidden,
  exited: hidden,
};