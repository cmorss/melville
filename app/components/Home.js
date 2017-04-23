// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import NotebookContainer from '../containers/NotebookContainer';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <NotebookContainer />
      </div>
    );
  }
}
