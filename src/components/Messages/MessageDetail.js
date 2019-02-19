import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from "axios";

class MessageDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            messageList: [],
            commentList: [],
            personList: [],
    }
}

    fetchComment = () => {
        const id = this.props.reduxStore.message.mess_id;
        console.log(this.prop);
        const action = { type: 'FETCH_COMMENT', payload: id };
        this.props.dispatch(action);
    }

    componentDidMount() {
        
        this.props.dispatch({ type: 'FETCH_MESSAGES' });
        this.props.dispatch({ type: 'FETCH_PERSON' });
        this.fetchComment();
        // this.props.dispatch({ type: 'FETCH_COMMENT', payload: id })
    }



   
    render() {
     
        return (
                <div>
                    {JSON.stringify(this.props.reduxStore.message)}
                    {/* <p className="mess_headline">{messsageDetails.headline}</p>
                    <p className="mess_desc">{messsageDetails.message}</p> */}
                </div> 
            );
        }

    }

const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore: reduxStore 
 
});

export default connect(mapReduxStoreToProps)(MessageDetail);