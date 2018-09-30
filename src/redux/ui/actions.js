export const actionTypes = {
  setIsEditing: "ui/SET_IS_EDITING",
  setImageDetailsVisible: "ui/SET_IMAGE_DETAILS_VISIBLE",
  setSelectedImageId: "ui/SET_SELECTED_IMAGE_ID"
};

export const setIsEditing = (isEditing) => ({
  type: actionTypes.setIsEditing,
  isEditing
});

export const setImageDetailsVisible = (imageDetailsVisible) => ({
  type: actionTypes.setImageDetailsVisible,
  imageDetailsVisible
});

export const setSelectedImageId = (selectedImageId) => ({
  type: actionTypes.setSelectedImageId,
  selectedImageId
});