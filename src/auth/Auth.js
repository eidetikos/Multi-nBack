import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Log from './Log';

class Auth extends PureComponent {
 
  render() {
    return (
      <div className="auth">
        <h3>Auth component</h3>
        <Log/>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(Auth);