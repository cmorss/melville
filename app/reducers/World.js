import { ACTIVATE_NOTEBOOK, TOGGLE_WORLD_DRAWER } from '../constants/ActionTypes';

const initialState = {
  activeNotebookId: "ID-1",
  drawerOpen: false
};

export default (state = initialState, action = {}) => {

  switch (action.type) {
    case ACTIVATE_NOTEBOOK:
      return {...state, activeNotebookId: action.payload.notebookId };

    case TOGGLE_WORLD_DRAWER:
      return {...state, drawerOpen: !state.drawerOpen };

    default:
      return state;
  }
};
