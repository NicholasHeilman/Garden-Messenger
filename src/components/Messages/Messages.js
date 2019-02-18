import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageItem from './MessageItem.js';
import './Messages.css';


class Messages extends Component {
    // state = {
    //     messageList: [],
    // }

    componentDidMount(){
        // Saga for the axios.get 
        this.props.dispatch({type: 'FETCH_MESSAGES' });
    }

    
    addMessage = () => {
        console.log('Link to addMessage');

    }

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.props.reduxStore.message)} */}
                {this.props.reduxStore.message.map(message =>
                     <MessageItem key={message.mess_id} message={message} />
                )}
                <div className="MessageBtn" >
                    <Link to="/AddNew">
                        <button className="addMessageBtn" onClick={this.addMessage}>
                        <img src="https://img.icons8.com/material/72/000000/plus.png" />
{/* //                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                         <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
//                         <path d="M0 0h24v24H0z" fill="none"/></svg> */}
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

// const mapReduxStoreToProps = (reduxStore) => ({ 
//     reduxStore: reduxStore 
 
// });
const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });
export default connect(mapReduxStoreToProps)(Messages);