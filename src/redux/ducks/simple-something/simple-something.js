export default (state = {}, { type, ...payload }) => {
  switch (type) {
    case "SIMPLE_ACTION": return {
      ...state,
      value: payload.value
    };
    default:
      return state;
  }
};