export const UPDATE_NOTEBOOK = 'UPDATE_NOTEBOOK';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function updateNotebook({ notebookId, content }) {
  console.log("updateNotebook action called", notebookId, content);
  return {
    type: UPDATE_NOTEBOOK,
    notebookId,
    content
  };
}

export function incrementCounter({ notebookId }) {
  console.log("incrementCounter action called", notebookId);
  return {
    type: INCREMENT_COUNTER,
    notebookId
  };
}
