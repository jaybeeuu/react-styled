export const createReducer = (
  defaultState,
  handlers
) => (
  state = defaultState,
  action = {}
) => handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state;

export const createCollectionReducer = (
  defaultCollectionState,
  collectionHandlers,
  defaultRecordState,
  recordHandlers,
  recordIdentifierActionPropName
) => (
  state = defaultCollectionState,
  action = {}
) => {
  const { type, [recordIdentifierActionPropName]: recordId } = action;

  if(recordHandlers.hasOwnProperty(type)) {
    return recordHandlers(state[recordId] || defaultRecordState, action);
  } else if (collectionHandlers.hasOwnProperty(type)) {
    return collectionHandlers[type](state, action);
  } else {
    return state;
  }
};