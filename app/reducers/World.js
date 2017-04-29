import { ACTIVATE_NOTEBOOK } from '../constants/ActionTypes';

const initialState = { activeNotebookId: "ID-1" };

export default (state = initialState, action = {}) => {

  switch (action.type) {
    case ACTIVATE_NOTEBOOK:
      return {...state, activeNotebookId: action.notebookId };

    default:
      return state;
  }
};
