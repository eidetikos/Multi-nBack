import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class AudioNumLayer extends PureComponent {
  render() {
    return (
      <div className="audio-num-layer">
        <h2>AudioNumLayer component</h2>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(AudioNumLayer);