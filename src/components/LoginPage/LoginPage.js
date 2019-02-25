import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <br /> 
        <br />

        <h1 className="title">GrowHere</h1>
        <br />
        <br />
      
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login} className="LoginForm">
          <h1>Login</h1>
          <div>
            
              <TextField
                type="text"
                label="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            
          </div>
          <div>
          
              <TextField
                type="password"
                label="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            
          </div>
          <br />
          <br />
          <div>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
              background-color="#186842"
            />
          </div>
        </form>
        <center>
          <br />
          <br />
          <br />
          <button
            type="button"
            className="link-button"
            color="#186842"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
