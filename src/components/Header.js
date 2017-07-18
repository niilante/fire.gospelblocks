import React from 'react';
// import * as firebase from 'firebase';
// Material UI Components
import AppBar from 'material-ui/AppBar';

// import LoginForm from './header/LoginForm'
import HeaderMenu from './header/HeaderMenu'


// auth.signInWithEmailAndPassword(email,pass);
// auth.createUserWithEmailAndPassword(email,pass);
// auth.onAuthStateChanged(firebase => {});

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

  render() {
    return (
        <div style={styles.header}>
          <AppBar
                title={<span style={styles.title}>Gospel Blocks</span>}
                onTitleTouchTap={handleTouchTap}
                iconClassNameLeft="muidocs-icon-navigation-expand-more"
                iconElementRight={<HeaderMenu />}
                onRightIconButtonTouchTap={login}
              />

        </div>
    );
  }
}
// iconElementRight={<FlatButton label="Login" onTouchTap={this.handleOpen.bind(this)} />}
// iconElementRight={<IconButton style={{display: "None"}}><NavigationMenu /></IconButton>}
// iconElementRight={<FlatButton label="Login" />}
