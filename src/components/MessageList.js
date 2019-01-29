import React, { Component } from 'react';
import './MessageList.css'

class MessageList extends Component {
  constructor(props){
    super(props);

    this.state ={
      /*Init state with empty array so we can push data to it later*/
      messages: [],
      newMessage: null
    }
/*References messages table in firebase*/
  this.messagesRef = this.props.firebase.database().ref('Messages');
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
  }

/*Event to grab messages from firebase*/
componentDidMount(){
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }

handleChange (e){
  this.setState({newMesssage: e.target.value});
}

handleSubmitMessage(e){
  e.preventDefault();
  console.log(e.target.value);
  this.MessagesRef.push({
    content: this.state.newMessage,
    username: this.props.user ? this.props.user.displayName : "Guest",
    sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
    roomId: this.props.activeRoom.key
  });
}

render() {
  return(
    <div className = "message-list">
      <div>
      {this.state.messages.filter(message =>
        message.roomId == this.props.activeRoom.key).map((message, index) =>
        <p>{message.content}{"  "}
        {message.sentAt}{"  "}
        {message.username}</p>)}
      </div>
      <div>
        <form className = "send-message-form" onSubmit = {this.handleSubmitMessage}>
          <input
            onChange = {this.handleChange}
            value = {this.state.newMessage}
            placeholder = "Type your message and hit ENTER"
            type = "text"/>
        </form>
      </div>
    </div>
  )
}
}

export default MessageList;
