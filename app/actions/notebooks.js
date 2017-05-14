import * as Types from "../constants/ActionTypes";
import * as Selectors from "../store/selectors";
import { persist } from "../plugins/local_file_storage";

export function saveNotebookRequest(notebook) {
  return {
    type: Types.SAVE_NOTEBOOK_REQUEST,
    payload: { notebook }
  };
}

export function updateNotebook({ notebookId, content }) {
  return {
    type: Types.UPDATE_NOTEBOOK,
    payload: {
      notebookId,
      content
    }
  };
}

export function saveActiveNotebook() {
  return (dispatch, getState) => {
    const notebook = Selectors.getActiveNotebook(getState());
    dispatch(saveNotebookIfNeeded(notebook.id))
  }
}

export function saveNotebookComplete(notebook) {
  return {
    type: Types.SAVE_NOTEBOOK_COMPLETE,
    payload: { notebook }
  };
}

function invokePersistNotebook(notebook) {
  return {
    type: "INVOKE_PERSIST_NOTEBOOK",
    payload: persist(notebook)
  }
}

function persistNotebook(notebook) {
  return dispatch => {
    dispatch(saveNotebookRequest(notebook));
    dispatch(invokePersistNotebook(notebook))
  }
}

function shouldSaveNotebook(notebook) {
  if (notebook.isSaving) {
    return false;
  } else {
    return notebook.isDirty;
  }
}

export function saveNotebookIfNeeded(notebookId) {
  return (dispatch, getState) => {
    const notebook = Selectors.getNotebook(getState(), notebookId);
    if (shouldSaveNotebook(notebook)) {
      return dispatch(persistNotebook(notebook));
    }
  }
}
