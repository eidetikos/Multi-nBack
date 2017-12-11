import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Auth extends PureComponent {
  render() {
    return (
      <div className="auth">
        <h3>Auth component</h3>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(Auth);