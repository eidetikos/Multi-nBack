import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class PreGame extends PureComponent {
  render() {
    return (
      <div className="pre-game">
        <h3>PreGame component</h3>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(PreGame);