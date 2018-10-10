import colours from "./colours";
import * as constants from "./constants";

const transition = (delay, property = "all") => ({
  transition: `${property} ${delay}ms ease-in`
});

export const transitions = {
  simple: transition(constants.durations.simple),
  complex: transition(constants.durations.complex),
  detailed: transition(constants.durations.detailed)
};

export const textOverlay = {
  color: colours.white,
  background: colours.backgroundFadeBlack
};