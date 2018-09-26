const getLocalState = (state) =>  state.ui || {};

export const getSelectedImageId = (state) => getLocalState(state).selectedImageId;
export const getIsEditing = (state) => getLocalState(state).getIsEditing;