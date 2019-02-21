import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageItem from './MessageItem.js';
import './Messages.css';
import AddCircle from '@material-ui/icons/AddCircle';



class Messages extends Component {
   

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
                        <AddCircle style={{ fontSize: 48 }}/>
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