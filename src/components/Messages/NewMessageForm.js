import React, { Component } from 'react';



import { connect } from 'react-redux';

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
            type: 'ADD_NEW_MESSAGE',
            payload: this.state,
        }
        this.props.dispatch(action);
        // this.refs.headline = '';
        // this.refs.message = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit} id="form" ref="form">
                    <input onChange={this.changeInput} type="text" name="headline" placeholder="headline" ref="form" required />
                    <input onChange={this.changeInput} type="text" name="message" placeholder="message" ref="form" required />
                    <input type="submit" onClick={this.clearForm}/>
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