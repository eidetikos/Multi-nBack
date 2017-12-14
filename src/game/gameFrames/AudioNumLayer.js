import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Audio from 'react-audio-player';

import './AudioNumLayer.css';

class AudioNumLayer extends PureComponent {
  
  handleClick = e => {
    e.stopPropagation();
    if(this.props.inRecall && !e.target.value) this.props.onShapePick();
  }

  handleNumSelect = e => this.props.onNumberPick(e.target.value);
  
  render() {
    const { number, audio, useNumber, useAudio, inRecall } = this.props;
    return (
      <div 
        className="audio-num-layer" 
        onClick={this.handleClick}
      >
        {useNumber && (
          inRecall ? (
            <select 
              value={number}
              onChange={this.handleNumSelect}
            >
              {new Array(9).fill(1).map((ele, i) => i + 1).map(numOption => (
                <option key={numOption} value={numOption}>{numOption}</option>
              ))}
            </select>
          ) : (
            <div>{number}</div>
          )
        )}
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