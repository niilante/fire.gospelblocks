import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import LoginForm from './header/LoginForm'


function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

function login() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
  header: {
    textAlign: 'left',
  },
};

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      menuElement: <FlatButton label="Login" onTouchTap={this.handleOpen.bind(this)} />,
      open: false,
    };
  }

  isLoggedIn(){
    if(!this.state.loggedIn){
      this.setState({
        menuElement: <IconButton><NavigationMenu /></IconButton>,
      });
    }
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];

    return (
        <div style={styles.header}>
          <AppBar
                title={<span style={styles.title}>Gospel Blocks</span>}
                onTitleTouchTap={handleTouchTap}
                iconClassNameLeft="muidocs-icon-navigation-expand-more"
                iconElementRight={this.state.menuElement}
                onRightIconButtonTouchTap={login}
              />
            <Dialog
                title="Login"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose.bind(this)}
              >
              <LoginForm />
            </Dialog>
        </div>
    );
  }
}

// iconElementRight={<FlatButton label="Login" />}
