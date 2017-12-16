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
    const { number, audio, useNumber, useAudio, useGrid, inRecall } = this.props;
    const selectFontSize = { fontSize: useGrid ? '2.5em' : '4.5em' };
    const displayFontSize = { fontSize: useGrid ? '3em' : '7em' };

    return (
      <div 
        className="audio-num-layer" 
        onClick={this.handleClick}
      >
        {useNumber && (
          inRecall ? (
            <select 
              value={number}
              style={selectFontSize}
              onChange={this.handleNumSelect}
            >
              {new Array(9).fill(1).map((ele, i) => i + 1).map(numOption => (
                <option key={numOption} value={numOption}>{numOption}</option>
              ))}
            </select>
          ) : (
            <div style={displayFontSize}>{number}</div>
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