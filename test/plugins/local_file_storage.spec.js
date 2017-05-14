import * as Storage from '../../app/plugins/local_file_storage'
import { initialState as notebook } from '../../app/actions/notebooks';
const electron = require('electron');
const remote = electron.remote;

describe('persist', () => {
  it('figure out path from home', () => {
    const notebook = { id: 1, title: "War and Peace" };

    remote.dialog.showSaveDialog.mockImplementation((_browserWindow, _properties, cb) => cb("/path"));
    remote.getCurrentWindow.mockImplementation(() => "window");

    const promise = Storage.persist(notebook);
    expect.assertions(1);
    promise.then((data) => expect(data).toEqual('Mark'));
  });
});
