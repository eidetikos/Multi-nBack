import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { signUp, signIn } from './actions';
import { withRouter } from 'react-router-dom';
import Error from '../app/Error';

class AuthForm extends PureComponent {


  handleSignup = event => {
  
    if(event.target.value === 'signup') {
      this.props.signUp(event.target.parentNode.name.value, event.target.parentNode.password.value)
        .then(() => {
          if(!this.props.userError) {
            this.props.closeModal();
            this.props.history.push(this.props.location.pathname);
          }
        });
    }
  }

  handleSignin = event => {
    event.preventDefault();

    this.props.signIn(event.target.name.value, event.target.password.value)
      .then(() => {
        if(!this.props.userError) {
          this.props.closeModal();
          this.props.history.push(this.props.location.pathname);
        }
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
    const { userError } = this.props;

    return (this.verifiedUser ? (
      <button onClick={this.handleLogout}>Logout</button>
    ) : (
      <form onClick={this.handleSignup} onSubmit={this.handleSignin}>
        <label>User Name:</label>
        <input name="name"/>
        <p>* user name must be unique</p>
        <label>Password:</label>
        <input type="password" name="password" placeholder="***************"/>
        <button type="submit" name="signin">SIGNIN</button>
        <button type="button" name="signup" value="signup" >SIGNUP</button>
        <Error error={userError}/>
      </form>
    ));
  }
}

export default withRouter(connect(
  state => ({ 
    userError: state.userError
  }),
  { signUp, signIn }
)(AuthForm));
