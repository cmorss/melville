import React from 'react';
import styles from './World.css';
import AppBar from 'material-ui/AppBar';
import Home from '../containers/HomePage';

export default class World extends React.Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <AppBar title={this.props.activeNotebook.title} iconClassNameRight="muidocs-icon-navigation-expand-more">
        </AppBar>
        <Home />
      </div>
    )
  }
}
