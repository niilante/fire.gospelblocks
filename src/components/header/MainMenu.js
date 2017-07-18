import React from 'react';
import * as firebase from 'firebase';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';


export default class PopoverExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap(e) {
    // This prevents ghost click.
    e.preventDefault();

    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    });
  };

  handleRequestClose(){
    this.setState({
      open: false,
    });
  };

  signOut(){
    console.log("hello");
    const promise = firebase.auth().signOut();
    promise.catch(e => console.log(e.message));
    // promise.t(e => console.log(e.message));
  }
  render() {
    return (
      <div>
        <IconButton onTouchTap={this.handleTouchTap.bind(this)} ><NavigationMenu /></IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
          <Menu>
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" onTouchTap={this.signOut.bind(this)}/>
          </Menu>
        </Popover>
      </div>
    );
  }
}
