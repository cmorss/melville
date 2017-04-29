import reducer from '../../app/reducers/notebooks'
import * as types from '../../app/constants/ActionTypes'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {"ID-1": {"counter": 0, "id": "ID-1", "title": "My Notebook"}}
    )
  });

  it('should modify title', () => {
    expect(
      reducer(undefined, {
        type: types.UPDATE_NOTEBOOK,
        notebookId: "ID-1",
        title: "New Title" })
    ).toEqual(
      {"ID-1": {"counter": 0, "id": "ID-1", "title": "New Title"}}
    )
  });
});

