import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Auth extends PureComponent {
  render() {
    return (
      <main>
        <h3>Auth component</h3>
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(Auth);