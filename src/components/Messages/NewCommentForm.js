import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewMessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: '',
            message_id: this.props.mess_id,
            user_id: this.props.user.id,
        };
        console.log(this.state);
        console.log()
    }
    //  handles the change for the input fields
    changeInput = (event) => {
        
        const changeValue = event.target.value;
        this.setState({
            ...this.state,
            comment: changeValue, 
        });
    }
    //  handles the submit form click
    submit = (event) => {
        event.preventDefault();
        const action = {
            type: 'ADD_COMMENT',
            payload: this.state,
        }
        this.props.dispatch(action);
        this.props.history.push('/home');
        this.props.dispatch({type: 'FETCH_MESSAGES' });
        // this.refs.headline = '';
        // this.refs.message = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit} id="form" ref="form">
                    <input onChange={this.changeInput} type="text" name="comment" placeholder="Add to the Conversation" ref="form" required />
                    <input type="submit" to="/home" />
                 
                </form>
            </div>
        );
    }
}

// const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });
const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
    user: reduxStore.user,
});

export default connect(mapReduxStoreToProps)(NewMessageForm);