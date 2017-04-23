// @flow
import React, { Component } from 'react';
import styles from './Notebook.css';
import BaseEditor from './BaseEditor';

export default class Notebook extends Component {

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Notebook Name</h2>
        <BaseEditor updateEditor={ () => {} } />
      </div>
    );
  }
}
