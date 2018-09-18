const getLocalState = (state) =>  state.simpleSomething;

export const getValue = (state) => getLocalState(state).value;