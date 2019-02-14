import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from "axios";

class MessageDetail extends Component {
    state = {
        messageList: [],
    }

    componentDidMount(){
        // Saga for the axios.get 
        // this.props.dispatch({ type: 'GET_MESSAGES' });
    }

   

    render() {

        return (
            <div>
                {/* {JSON.stringify(this.props.reduxStore.message)} */}
                <h3>Message Details</h3>
                <ul>
                   
                </ul>
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore: reduxStore 
 
});

export default connect(mapReduxStoreToProps)(MessageDetail);