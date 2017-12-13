import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { signUp, signIn } from './actions';
import { withRouter } from 'react-router-dom';
import Error from '../app/Error';

class AuthForm extends PureComponent {

  handleSignup = event => {
    if(event.target.value === 'signup') {
      this.props.signUp(event.target.parentNode.name.value, event.target.parentNode.password.value).then(() => {
        this.props.closeModal();
        this.props.history.push(this.props.location.pathname);
      });
    }
  }
  
  handleSignin = event => {
    event.preventDefault();

    this.props.signIn(event.target.name.value, event.target.password.value).then(() => {
      this.props.closeModal();
      this.props.history.push(this.props.location.pathname);
      // event.target.reset();
    });
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.closeModal();
    this.props.history.push('/');
  }

  componentWillMount() {
    this.verifiedUser = !!localStorage.getItem('token');
  }

  render() {
    const { error } = this.props;
    const inOrOut = localStorage.getItem('token') ? <button onClick={this.handleLogout}>Logout</button> : <button onClick={this.handleLogout}>Login</button>;

    return (this.verifiedUser ? (
      inOrOut
    ) : (
      <form onClick={this.handleSignup} onSubmit={this.handleSignin}>
        <label>User Name:</label>
        <input name="name"/>
        <p>* user name must be unique</p>
        <label>Password:</label>
        <input type="password" name="password" placeholder="***************"/>
        <button type="submit" name="signin">SIGNIN</button>
        <button type="button" name="signup" value="signup" >SIGNUP</button>
        <Error error={error}/>
      </form>
    ));
  }
}

export default withRouter(connect(
  state => ({ 
    error: state.userError
  }),
  { signUp, signIn }
)(AuthForm));
