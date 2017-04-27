// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notebook.css';
import BaseEditor from './BaseEditor';

export default class Notebook extends Component {

  updateEditor(update) {
    this.props.updateNotebook({
      notebookId: this.props.notebook.id,
      content:    update.content
    });
    this.props.incrementCounter({ notebookId: this.props.notebook.id });
  }

  render() {
    console.log("notebook render")
    return (
      <div className={styles.container} data-tid="container">
        <h2>Notebook #{this.props.notebook.counter}</h2>
        <BaseEditor notebook={this.props.notebook} updateEditor={this.updateEditor.bind(this)} />
      </div>
    );
  }
}

Notebook.propTypes = {
  notebook: PropTypes.object.isRequired,
  updateNotebook: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired
};
