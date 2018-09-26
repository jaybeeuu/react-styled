// eslint-disable-next-line no-unused-vars
const imageReducer = (state = {}, { type, ...payload }= {}) => {
  switch (type) {
    default: return state;
  }
};

export default (state = {}, { type, ...payload } = {}) => {
  switch (type) {
    default:
      return payload.id ? (
        { ...state, [payload.id]: imageReducer(state[payload.id], { type, ...payload }) }
      ) : state;
  }
};