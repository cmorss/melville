import * as types from '../constants/ActionTypes'

export function updateNotebook({ notebookId, content }) {
  return {
    type: types.UPDATE_NOTEBOOK,
    notebookId,
    content
  };
}
