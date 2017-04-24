// @flow
import React, { Component } from 'react';
import Notebook from '../components/notebook/Notebook';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NotebookActions from '../actions/notebooks';

// class NotebookContainer extends Component {
//   render() {
//     return (
//       <Notebook notebook={ this.props.notebook } updateNotebook={ this.props.updateNotebook } />
//     );
//   }
// }
//

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  const notebook = state.notebook || { id: 1, name: 'Notebook Name' };
  const result = {
    notebook:         notebook,
    updateNotebook:   NotebookActions.updateNotebook,
    incrementCounter: NotebookActions.incrementCounter,
  };
  console.log("result", result)
  return result;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NotebookActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Notebook);
