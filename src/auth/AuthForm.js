import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { signUp } from './actions';

class Auth extends PureComponent {

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.name.value);
    console.log(event.target.password.value);
    this.props.signUp(event.target.name.value, event.target.password.value);
    event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>User Name:</label>
        <input name="name"/>
        <p>* user name must be unique</p>
        <label>Password:</label>
        <input type="password" name="password" placeholder="***************"/>
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default connect(
  state => ({}),
  { signUp }
)(Auth);
