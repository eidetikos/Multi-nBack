import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class About extends PureComponent {
  render() {
    return (
      <main>
        <h2>about component</h2>
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(About);