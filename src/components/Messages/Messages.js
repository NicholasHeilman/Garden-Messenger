import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageItem from './MessageItem.js';
import './Messages.css';
import AddCircle from '@material-ui/icons/AddCircle';
// import Button from '@material-ui/core/Button'



class Messages extends Component {
   

    componentDidMount(){
        // Saga for the axios.get 
        this.props.dispatch({type: 'FETCH_MESSAGES' });
        // window.location.reload();
    }

    
    addMessage = () => {
        console.log('Link to addMessage');

    }

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.props.reduxStore.message)} */}
                {this.props.reduxStore.message.map(message =>
                     <MessageItem key={message.mess_id} message={message} headline={message.headline}/>)}
                
                <div className="MessageBtn" >    
                        <button className="addMessageBtn" onClick={this.addMessage}>
                        <Link to="/AddNew">
                            <AddCircle style={{ fontSize: 48, color: '#186842' }}  />
                        </Link>
                        </button>
                </div>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });
export default connect(mapReduxStoreToProps)(Messages);