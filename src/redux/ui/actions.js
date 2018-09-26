export const actionTypes = {
  setSelectedImageId: "ui/SET_SELECTED_IMAGE_ID"
};

export const setSelectedImageId = (selectedImageId) => ({ type: actionTypes.setSelectedImageId, selectedImageId });