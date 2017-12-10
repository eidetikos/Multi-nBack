import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class InGame extends PureComponent {
  render() {
    return (
      <div className="in-game">
        <h3>InGame component</h3>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(InGame);