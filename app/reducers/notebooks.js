import { UPDATE_NOTEBOOK, INCREMENT_COUNTER } from '../actions/notebooks';

const initialState = {
  1: { id: 1, title: "My Notebook", counter: 0 }
};

export default (state = initialState, action = {}) => {

  console.log("reducer", state);
  let notebook = Object.assign({}, state[action.notebookId]);

  switch (action.type) {
    case UPDATE_NOTEBOOK:
      notebook.content = action.content;
      return {...state, [action.notebookId] : notebook};

    case INCREMENT_COUNTER:
      notebook.counter++;
      return {...state, [action.notebookId] : notebook};;

    default:
      return state;
  }
};
