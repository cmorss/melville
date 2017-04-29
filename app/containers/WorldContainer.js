// @flow
import React, { Component } from 'react';
import World from '../components/World';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NotebookActions from '../actions/notebooks';

function mapStateToProps(state) {
  console.log("WorldContainer#mapStateToProps: state = ",state);
  const notebook = state.notebooks[state.world.activeNotebookId];
  return { activeNotebook: notebook };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(NotebookActions, dispatch);
// }

export default connect(mapStateToProps)(World);
