import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD4oMBI2mzH-vSZKo6hLf4wcRrhTBu9brE",
    authDomain: "blocchat-bda4e.firebaseapp.com",
    databaseURL: "https://blocchat-bda4e.firebaseio.com",
    projectId: "blocchat-bda4e",
    storageBucket: "blocchat-bda4e.appspot.com",
    messagingSenderId: "877998587661"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
