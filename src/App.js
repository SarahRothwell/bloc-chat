import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';

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
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: ""
    };

    this.handleActiveRoomChange = this.handleActiveRoomChange.bind(this);
  }

/*Sets new active room state based on what user clicked on*/
handleActiveRoomChange(e){
  this.setState({activeRoom: e});
  console.log(e);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bloc Chat</h1>
        </header>
        <main>
          <div>
          <RoomList
            firebase={firebase}
            activeRoom = { this.state.activeRoom }
            handleActiveRoomChange = {(e) => this.handleActiveRoomChange(e)}
          />
      </div>
          <div className="Message-List">
            {this.state.activeRoom ? this.state.activeRoom.name : 'Pick a room!'}
            <MessageList
              firebase = {firebase}
              activeRoom = {this.state.activeRoom}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
