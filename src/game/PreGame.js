import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class PreGame extends PureComponent {
  render() {
    return (
      <main>
        <h3>PreGame component</h3>
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(PreGame);