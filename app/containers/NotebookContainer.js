// @flow
import React, { Component } from 'react';
import Notebook from '../components/notebook/Notebook';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NotebookActions from '../actions/notebooks';

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  const notebook = state.notebooks["ID-1"];

  console.log("mapStateToProps, notebook: ", notebook);
  return { notebook: notebook };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NotebookActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Notebook);
