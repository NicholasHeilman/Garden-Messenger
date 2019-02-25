import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import './Comment.css';
import Button from '@material-ui/core/Button'


class NewMessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: '',
            message_id: 8285,
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
    submitComment = (event) => {
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
            <div className="commentForm">
                <form onSubmit={this.submitComment} id="form" ref="form" className="commentForm" >
                    <TextField multiline rowsMax="6" margin="normal" onChange={this.changeInput} type="text" label="Comments" ref="form" r className="commentInput" />
                    <Button type="submit" variant="outlined" style={{ color: '#186842' }} margin="normal" to="/home" >Submit</Button>
                 
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