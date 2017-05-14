module.exports = {
  require: jest.genMockFunction(),
  match: jest.genMockFunction(),
  app: jest.genMockFunction(),
  dialog: jest.genMockFunction(),

  remote: {
    getCurrentWindow: jest.genMockFunction(),
    app: {
      getPath: jest.genMockFunction()
    },
    dialog: {
      showSaveDialog: jest.genMockFunction()
    }
  }
};
