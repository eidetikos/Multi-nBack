import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './AudioNumLayer.css';

class AudioNumLayer extends PureComponent {
  render() {
    const { number, audio, useNumber, useAudio } = this.props;
    return (
      <div className="audio-num-layer">
        {useNumber && 
          <div>{number}</div>
        }
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(AudioNumLayer);