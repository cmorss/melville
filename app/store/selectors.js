export function getActiveNotebook(state) {
  if (state.world === null)
    throw "state expected to have `world` collection";

  return getNotebook(state, state.world.activeNotebookId);
}

export function getNotebook(state, notebookId) {
  if (state.notebooks === null)
    throw "state expected to have `notebooks` collection";

  return state.notebooks[notebookId];
}
