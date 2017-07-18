import React, { Component } from 'react';
import * as firebase from 'firebase';
import Layout from './components/Layout.js'



class App extends Component {


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
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
