import React from 'react';
import styles from './World.css';
import AppBar from 'material-ui/AppBar';
import Home from '../containers/HomePage';
import PropTypes from 'prop-types';
import WorldDrawer from "./WorldDrawer";

export default class World extends React.Component {

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <AppBar title={this.props.activeNotebook.title}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.props.toggleWorldDrawer}>
        </AppBar>

        <WorldDrawer open={this.props.drawerOpen}
                     toggleWorldDrawer={this.props.toggleWorldDrawer}
                     saveActiveNotebook={this.props.saveActiveNotebook}/>
        <Home />
      </div>
    )
  }
}

World.propTypes = {
  activeNotebook: PropTypes.object.isRequired,
  toggleWorldDrawer: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  saveActiveNotebook: PropTypes.func.isRequired
};
