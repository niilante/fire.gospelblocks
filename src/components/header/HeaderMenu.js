import React from 'react';
import * as firebase from 'firebase';
import '../../index.css';
import LoginMenu from './LoginMenu'
import MainMenu from './MainMenu'


export default class HeaderMenu extends React.Component {
  constructor(){
    super();
    this.state = {
      showLogin: "",
      showMenu: "hidden",
    };
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        this.setState({
          showLogin: "hidden",
          showMenu: "",
        });
      }else{
        this.setState({
          showLogin: "",
          showMenu: "hidden",
        });
      }
    })
  }

  render () {
    return (
        <div>
          <div className={this.state.showMenu}>
            <MainMenu />
          </div>
          <div className={this.state.showLogin}>
            <LoginMenu />
          </div>
        </div>
    );
  }
}
