import React from 'react';
import * as firebase from 'firebase';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

export default class LoginMenu extends React.Component {
  constructor(){
    super();
    this.state = {
      open: false,
      userExists: 'Sign Up',
      menuElement: <FlatButton label="Login" onTouchTap={this.handleOpen.bind(this)} />,

    };
  }
  userExistCheck(){
    let email = document.getElementById('loginEmail').value;
    const promise = firebase.auth().fetchProvidersForEmail(email);
    // promise.catch(e => console.log(e.message));
    promise.then(e => {
      if(e.length > 0){
        this.setState({userExists: 'Login'});
      }else{
        this.setState({userExists: 'Sign Up'});
      }
    });
  }

  signIn() {
    if(this.state.userExists === "Sign Up"){
      // TODO Validate email and pass
      let email = document.getElementById('loginEmail').value;
      let pass = document.getElementById('loginPassword').value;
      const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
      // promise.catch(e => console.log(e.message));
    }else{
      let email = document.getElementById('loginEmail').value;
      let pass = document.getElementById('loginPassword').value;
      const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
      // promise.catch(e => console.log(e.message));
    }
    this.setState({open: false});
  };

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render () {
    const actions = [
      <FlatButton
        label={this.state.userExists}
        primary={true}
        onTouchTap={this.signIn.bind(this)}
        fullWidth={true}
      />,
    ];
    return (
        <div>
            <FlatButton label="Login" onTouchTap={this.handleOpen.bind(this)} />
            <Dialog
                title="Sign Up or Login"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose.bind(this)}
              >
              <TextField
                id="loginEmail"
                hintText="user@email.com"
                floatingLabelText="Email"
                onChange={this.userExistCheck.bind(this)}
              /><br />
              <TextField
                id="loginPassword"
                hintText="super secrete pass"
                floatingLabelText="Password"
                type="password"
              />
            </Dialog>
        </div>
    );
  }
}
