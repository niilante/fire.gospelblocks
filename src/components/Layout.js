import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from "./Header.js";

const styles = {
  container: {
    textAlign: 'center',
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export default class Layout extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      speed:11,
      open: false,
    };
  }

  handleRequestClose(){
    this.setState({
      open: false,
    });
  }

  handleTouchTap(){
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div style={styles.container}>
            <Header />
            <Dialog
              open={this.state.open}
              title="Super Secret Password"
              actions={standardActions}
              onRequestClose={this.handleRequestClose}
            >
              1-2-3-4-5
            </Dialog>
            <h1>Material-UI</h1>
            <h2>example project</h2>
            <RaisedButton
              label="Super Secret Faster"
              secondary={true}
              onTouchTap={this.handleTouchTap}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

}
