export const UPDATE_NOTEBOOK = 'UPDATE_NOTEBOOK';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function updateNotebook({ notebook, content }) {
  console.log("updateNotebook action called");
  return {
    type: UPDATE_NOTEBOOK,
    notebook,
    content
  };
}

export function incrementCounter({ notebook }) {
  console.log("incrementCounter action called");
  return {
    type: INCREMENT_COUNTER,
    notebook
  };
}
