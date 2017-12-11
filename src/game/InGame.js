import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import GridLayer from './gameFrames/GridLayer';
import ColorShapeLayer from './gameFrames/ColorShapeLayer';
import AudioNumLayer from './gameFrames/AudioNumLayer';

class InGame extends PureComponent {

  // set up fake data
  componentWillMount() {
    this.game = {
      status: 'in',
      numVariates: 5,
      difficulty: {
        initN: 2,
        interval: 1000
      },
      sequences: [{
        variates: {
          position: true,
          number: true,
          audio: false,
          shape: true,
          color: true
        },
        nBack: 3,
        interval: 1000,
        combos: [{
          position: 6,
          number: 3,
          audio: true,
          shape: 'square',
          color: 'red'
        }],
        comboPointer: 0
      }]
    };
    this.sequence= this.game.sequences.slice(-1)[0];
  }

  render() {
    console.log(this.game);
    console.log(this.sequence);
    return (
      <div className="in-game">
        <h3>InGame component</h3>
        <p># of sequences: 12</p>
        <GridLayer>
          <ColorShapeLayer>
            <AudioNumLayer/>
          </ColorShapeLayer>
        </GridLayer>
      </div>
    );
  }
}

export default connect(
  state => ({
    game: state.game,
    // sequence: state.game.sequences.slice(-1)
  }),
  null
)(InGame);