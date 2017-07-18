import React from 'react';
import TextField from 'material-ui/TextField';

export default class LoginForm extends React.Component {
  render () {
    return (
      <div>
        <TextField
          hintText="user@email.com"
          floatingLabelText="Email"
        /><br />
        <TextField
          hintText="super secrete pass"
          floatingLabelText="Password"
          type="password"
        />
      </div>
    );
  }
}
