import * as types from '../constants/ActionTypes'

export function updateNotebook({ notebookId, content }) {
  return {
    type: types.UPDATE_NOTEBOOK,
    notebookId,
    content
  };
}

export function incrementCounter({ notebookId }) {
  return {
    type: types.INCREMENT_COUNTER,
    notebookId
  };
}
