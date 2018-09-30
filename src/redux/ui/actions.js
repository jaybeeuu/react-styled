export const actionTypes = {
  setImageDetailsVisible: "ui/SET_IMAGE_DETAILS_VISIBLE",
  setSelectedImageId: "ui/SET_SELECTED_IMAGE_ID"
};

export const setImageDetailsVisible = (imageDetailsVisible) => ({
  type: actionTypes.setImageDetailsVisible,
  imageDetailsVisible
});

export const setSelectedImageId = (selectedImageId) => ({
  type: actionTypes.setSelectedImageId,
  selectedImageId
});