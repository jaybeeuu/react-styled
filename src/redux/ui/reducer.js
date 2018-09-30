import { createReducer } from "../create-reducer";
import { actionTypes } from "./actions";

const defaultState = {
  imageDetailsVisible: false,
  isEditing: false,
  selectedImageId: 0
};

const handlers = {
  [actionTypes.setImageDetailsVisible]: (state, { imageDetailsVisible }) => ({ ... state, imageDetailsVisible }),
  [actionTypes.setSelectedImageId]: (state, { selectedImageId }) => ({ ... state, selectedImageId })
};

export default createReducer(defaultState, handlers);