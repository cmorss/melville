import { UPDATE_NOTEBOOK, INCREMENT_COUNTER } from '../actions/notebooks';

export default (state = null, action = {}) => {

  const notebook = action.notebook;

  switch (action.type) {
    case UPDATE_NOTEBOOK:
      notebook.content = action.content;
      return { ...notebook };

    case INCREMENT_COUNTER:
      notebook.counter = notebook.counter ? notebook.counter + 1 : 1;
      return { ...notebook };

    default:
      return state;
  }
};
