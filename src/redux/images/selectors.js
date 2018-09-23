const getLocalState = (state) =>  state.images || {};

export const getAllIds = (state) => Object.keys(getLocalState(state));
export const getAllUrls = (state) => Object.values(getLocalState(state)).map((image) => image.url);

export const getImage = (state, id) => getLocalState(state)[id] || null;