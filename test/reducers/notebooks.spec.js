import reduce, { cloneNotebook, initialState } from '../../app/reducers/notebooks'
import * as types from '../../app/constants/ActionTypes'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reduce(undefined, {})
    ).toEqual(
      {"ID-1": {id: "ID-1", title: "Physics 101 Notes", isDirty: false, isSaving: false}}
    )
  });

  it('should modify title', () => {
    expect(
      reduce(undefined, {
          type: types.UPDATE_NOTEBOOK,
          payload: {
            notebookId: "ID-1",
            title: "New Title"
          }
        }
      )
    ).toEqual(
      {"ID-1": {id: "ID-1", title: "New Title", isDirty: true, isSaving: false}}
    )
  });

  it('should clone notebook', () => {
    const state = initialState;
    state["ID-1"].title = "Another Notebook";

    let clone = cloneNotebook(state, { "notebookId": "ID-1"});
    const expected = {id: "ID-1", title: "Another Notebook", isDirty: false, isSaving: false};
    expect(clone).toEqual(expected);
  });
});
