import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Messages.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'




class NewMessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            headline: '',
            message: '',
            user_id: this.props.user.id,
        };
        console.log(this.state);
    }
    //  handles the change for the input fields
    changeInput = (event) => {
        const attributeName = event.target.name;
        const changeValue = event.target.value;
        this.setState({
            ...this.state,
            [attributeName]: changeValue, 
        });
    }
    //  handles the submit form click
    submit = (event) => {
        event.preventDefault();
        const action = {
            type: 'ADD_TO_MESSAGE',
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
                <form onSubmit={this.submit} id="form" ref="form" class="messageForm">
                    <TextField multiline rowsMax="2" margin="normal"onChange={this.changeInput} type="text" name="headline" label="Headline" ref="form"  />
                    <TextField multiline rowsMax="4" label="Message" onChange={this.changeInput}  ref="form"   /><br /><br />
                    <Button type="submit" variant="outlined" margin="normal" to="/home" className="SubmitBtn" >Submit</Button>
                 
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