import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';

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
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bloc Chat</h1>
        </header>
        <main>
          <div>
          <RoomList firebase={firebase}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
