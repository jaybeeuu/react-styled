import { createReducer } from "../create-reducer";
import { actionTypes } from "./actions";

const defaultState = {
  selectedImageId: 0,
  isEditing: false
};

const handlers = {
  [actionTypes.setSelectedImageId]: (state, { selectedImageId }) => ({ ... state, selectedImageId })
};

export default createReducer(defaultState, handlers);