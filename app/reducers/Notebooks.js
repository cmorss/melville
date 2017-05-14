import { UPDATE_NOTEBOOK } from '../constants/ActionTypes';
import * as Util from '../utils/Object'

export const initialState = {
  "ID-1": {
    id: "ID-1",
    title: "Physics 101 Notes",
    isDirty: false,
    isSaving: false
  }
};

export const cloneNotebook = (state, payload) => {
  if (Util.isBlank(payload.notebookId))
    throw "Expected action to have a notebookId";

  let notebook = state[payload.notebookId];

  if (Util.isBlank(notebook))
    throw "Could not find notebook for notebookId of #{action.notebookId}";

  return Object.assign({}, notebook);
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_NOTEBOOK:
      const payload = action.payload;
      let notebook = cloneNotebook(state, payload);

      if (payload.content) notebook.content = payload.content;
      if (payload.title) notebook.title = payload.title;

      notebook.isDirty = true;

      return {...state, [payload.notebookId]: notebook};
    default:
      return state;
  }
};
