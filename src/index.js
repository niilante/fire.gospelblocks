import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

var config = {
    apiKey: "AIzaSyDfZqXtGLJ88SCM9I-mAdi0ctw9goVrEbg",
    authDomain: "gospel-blocks-173606.firebaseapp.com",
    databaseURL: "https://gospel-blocks-173606.firebaseio.com",
    projectId: "gospel-blocks-173606",
    storageBucket: "gospel-blocks-173606.appspot.com",
    messagingSenderId: "136436073017"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
