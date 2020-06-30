/*
Using  'react-chat-widget' library to display chat widget using react,
Chat widget comes with chat-box,input text field and send message on click enter button
*/

import React,{useEffect} from 'react';
import './App.css';
import { Widget,addResponseMessage  } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

//socket.io instantiation
import io from 'socket.io-client';
var socket = io.connect('http://localhost:5000')

function App() {

  useEffect(() => {
    addResponseMessage('Welcome to EchoBot');
  }, []);


  const handleNewUserMessage = (newMessage) => {

    console.log(`New message incoming! ${newMessage}`);
    //on Click of send button Emit a new message request to server
    socket.emit('new_message', {message : newMessage})

    //Upon recieving response from server, add message to chat window.
    socket.once("new_message", (data) => {
        addResponseMessage(data.message);
    })

  };

  return (
    <div className="App">
    <Widget
        handleNewUserMessage={handleNewUserMessage}
    />
    </div>
  );
}

export default App;
