import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';

class Messages extends Component {
    state = {
        messageList: [],
    }

    componentDidMount(){
        this.getMessageList();
    }

    getMessageList = () => {
        axios.get('/api/messages')
        .then( response => {
            console.log(response);
            this.setState({
                messageList:  response.data 
            })
        })
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.messageList)}
                <ul>{this.state.messageList.map(message =>
                    (<li key={message.mess_id}>{message.headline}<br />
                        Posted by: {message.user_id} at:
                        {message.date}</li>)
                )}
                </ul>
            </div>
        );
    }
}

export default Messages;