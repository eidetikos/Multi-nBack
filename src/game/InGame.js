import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class InGame extends PureComponent {
  render() {
    return (
      <main>
        <h3>InGame component</h3>
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(InGame);