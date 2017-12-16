import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Log from './Log';
import './Auth.css';


class Auth extends PureComponent {
 
  render() {
    return (
      <div className="auth">
        <Log/>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(Auth);