import * as types from '../constants/ActionTypes'

export function updateNotebook({ notebookId, content }) {
  console.log("updateNotebook action called", notebookId, content);
  return {
    type: types.UPDATE_NOTEBOOK,
    notebookId,
    content
  };
}

export function incrementCounter({ notebookId }) {
  console.log("incrementCounter action called", notebookId);
  return {
    type: types.INCREMENT_COUNTER,
    notebookId
  };
}
