import { UPDATE_NOTEBOOK, INCREMENT_COUNTER } from '../constants/ActionTypes';
import * as Util from '../utils/Object'

const initialState = {
  "ID-1": { id: "ID-1", title: "My Notebook", counter: 0 }
};

export default (state = initialState, action = {}) => {
  function cloneNotebook(state, action) {
    if (Util.isBlank(action.notebookId))
      throw "Expected action to have a notebookId";

    let notebook = state[action.notebookId];
    if (Util.isBlank(notebook))
      throw "Could not find notebook for notebookId of #{action.notebookId}";

    return Object.assign({}, notebook);
  }

  switch (action.type) {
    case UPDATE_NOTEBOOK:
      let notebook = cloneNotebook(state, action);

      if (action.content) notebook.content = action.content;
      if (action.title) notebook.title = action.title;

      return {...state, [action.notebookId]: notebook};

    default:
      return state;
  }
};
