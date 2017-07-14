import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor(){
      super();
      this.state = {
        speed:11
      }
  }

  componentDidMount(){
    const blockRef = firebase.database().ref().child('block').child('random_id');
    const speedRef = blockRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h1>{this.state.speed}</h1>
        </p>
      </div>
    );
  }
}

export default App;
