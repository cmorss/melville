const electron = require('electron');
const remote = electron.remote;
const { dialog } = electron.remote;
const { app } = electron.remote;
const fs = require('fs');
import * as Util from '../utils/Object'

/**
 * @param {object} browserWindow - electron BrowserWindow object
 * @param {object} properties - showSaveDialog parameter object
 * @returns {object} Promise
 */
function showSaveDialogAsync(browserWindow, properties) {
  return new Promise((resolve, reject) => {

    function callback(path) {
      console.log("callback, path = ", path);

      if (!Util.isBlank(path)) {
        console.log("resolving promise with ", path);
        resolve(path);
      }
      else {
        console.log("rejecting promise");
        reject("cancelled save");
      }
    }

    console.log("browserWindow", browserWindow);

    if (typeof properties === "undefined") {
      properties = browserWindow;
      browserWindow = undefined;
    }

    if (browserWindow) {
      dialog.showSaveDialog(browserWindow, properties, callback);
    } else {
      dialog.showSaveDialog(properties, callback);
    }
  });
}

/**
 * @param {object} notebook
 * @param {string} path to save notebook to
 * @returns {object} Promise
 */
function saveNotebookAsync(notebook, path) {
  return new Promise((resolve, reject) => {
    let notebookJson = JSON.stringify(notebook);

    fs.writeFile(path, notebookJson, 'utf-8', (err) => {
      if (err) {
        console.log("error saving notebook to disk", notebook);
        return reject(err)
      }
      else {
        console.log("saved notebook to disk", notebook);
        return resolve(path);
      }
    });
  });
}

/**
 * @param {object} notebook
 * @returns {object} Promise
 */
export function persist(notebook) {
  const browserWindow = remote.getCurrentWindow();
  const home          = app.getPath("documents");
  const path          = Util.isBlank(window.lastSavedFilePath) ?
                          `${home}/${notebook.title}.melville` :
                           window.lastSavedFilePath;

  const props         = { defaultPath:  path };

  return showSaveDialogAsync(browserWindow, props)
    .then((path) => {
      console.log('then ${path}');
      if (!Util.isBlank(path)) {
        window.lastSavedFilePath = path;
        return saveNotebookAsync(notebook, path);
      }
    })
    .catch((err) => {
      console.log("showSaveDialogAsync failed", err);
    });
}
