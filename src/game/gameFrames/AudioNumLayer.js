import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Audio from 'react-audio-player';

import './AudioNumLayer.css';

class AudioNumLayer extends PureComponent {
  render() {
    const { number, audio, useNumber, useAudio } = this.props;
    return (
      <div className="audio-num-layer">
        {useNumber && 
          <div>{number}</div>
        }
        {useAudio &&
          <Audio
            src={`audio/${audio}.mp3`}
            autoPlay
            preload="auto"
          />
        }
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(AudioNumLayer);