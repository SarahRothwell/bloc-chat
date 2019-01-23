import React, { Component } from 'react';

class RoomList extends Component {
  constructor (props) {
    super(props);

    this.state ={
      rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.createRoom = this.createRoom.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(e){
  this.setState({name: e.target.value});
}

/*form submission logic to create new room in firebase*/
createRoom(e){
  e.preventDefault();
  let newRoomName = this.state.name;
  console.log(newRoomName);
  this.roomsRef.push({
    name: newRoomName
  });
}

/*Cancel form logic*/
handleCancelForm(){

}


componentDidMount(){
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ) })
  });
}


  render () {
    return (
      <section className = "room-list-wrapper">
        <ul className="chat-rooms">
          {this.state.rooms.map((room, index) =>
            <li className = "room-names" key={index}>{room.name}</li>)}
        </ul>
        <form className = "create-new-room" onSubmit={this.createRoom}>
          <label>Enter name of new room:</label><br/>
          <input
            id = "submitNewRoom"
            type="text"
            name="name"
            placeholder="Name of Room..."
            value={this.state.name}
            onChange={e => this.handleChange(e)}/><br/>
          <button id='submitForm'>Submit</button><br/>
        </form>
      </section>
    );
  }
}

export default RoomList;
