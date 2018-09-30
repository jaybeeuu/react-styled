const getLocalState = (state) =>  state.ui || {};

export const getImageDetailsVisible = (state) => getLocalState(state).imageDetailsVisible;
export const getIsEditing = (state) => getLocalState(state).getIsEditing;
export const getSelectedImageId = (state) => getLocalState(state).selectedImageId;