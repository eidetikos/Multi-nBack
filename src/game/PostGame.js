import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class PostGame extends PureComponent {
  render() {
    return (
      <main>
        <h3>PostGame component</h3>
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(PostGame);