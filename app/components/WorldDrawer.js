import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

class WorldDrawer extends React.Component {

  render() {
    return (
      <Drawer open={this.props.open}>
        <AppBar title=""
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.props.toggleWorldDrawer} />
      </Drawer>
    )
  }
}

WorldDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleWorldDrawer: PropTypes.func.isRequired,
  saveActiveNotebook: PropTypes.func.isRequired
};

export default WorldDrawer;
