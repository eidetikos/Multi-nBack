import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { signUp, signIn, logOut } from './actions';
import { withRouter } from 'react-router-dom';
import Error from '../app/Error';


class AuthForm extends PureComponent {

  handleSubmit = event => {
    // onClick means enter key won't work. Not sure how else you might do this...
    
    if(event.target.value === 'signin' || event.target.value === 'signup') {
      const loginType = event.target.value;
      const form = event.target.parentNode.parentNode;

      this.props[loginType](form.name.value, form.password.value)
        .then(() => {
          if(!this.props.userError) {
            this.props.closeModal();
            this.props.history.push(this.props.location.pathname);
          }
        });
    }
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.logOut();
    this.props.closeModal();
    this.props.history.push('/');
  }

  componentWillMount() {
    this.verifiedUser = !!localStorage.getItem('token');
  }

  render() {
    const { userError } = this.props;

    return (this.verifiedUser ? (
      <button onClick={this.handleLogout}>Are you sure?</button>
    ) : (
      <form onSubmit={this.handleSubmit}>
        <section className="login-input-field">
          <section className="login-input">
            <label>User Name:</label>
            <input name="name" required maxLength="10"/>
          </section>
          <p>* user name must be unique</p>
        </section>
        <section className="login-input login-input-field">
          <label>Password:</label>
          <input type="password" name="password" required placeholder="**********"/>
        </section>
        <section className="login-buttons-field">
          <button type="button" className="signin-button" name="signin" value="signin">sign in</button>
          <button type="button" className="signup-button" name="signup" value="signup">sign up</button>
        </section>
        <Error error={userError}/>
      </form>
    ));
  }
}

export default withRouter(connect(
  state => ({ 
    userError: state.userError
  }),
  { signup: signUp, signin: signIn, logOut }
)(AuthForm));
