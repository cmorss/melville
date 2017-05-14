// @flow
import React, { Component } from 'react';
import World from '../components/World';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as WorldActions from '../actions/world';
import * as NotebookActions from '../actions/notebooks';

function mapStateToProps(state) {
  const notebook = state.notebooks[state.world.activeNotebookId];
  return { activeNotebook: notebook, drawerOpen: state.world.drawerOpen };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...WorldActions, ...NotebookActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(World);

