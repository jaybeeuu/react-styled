export const simpleAction = (value) => (dispatch) => {
  dispatch({
    type: "SIMPLE_ACTION",
    value
  });
};