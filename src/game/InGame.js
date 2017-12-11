import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import GridLayer from './gameFrames/GridLayer';
import ColorShapeLayer from './gameFrames/ColorShapeLayer';
import AudioNumLayer from './gameFrames/AudioNumLayer';

class InGame extends PureComponent {


  render() {
    this.game = this.props.tempGame;
    this.sequence = this.game.sequences.slice(-1)[0];
    
    console.log(this.game);
    console.log(this.sequence);
    const currentCombo = this.sequence.combos[this.sequence.comboPointer];
    console.log(currentCombo);
    return (
      <div className="in-game">
        <h3>InGame component</h3>
        <p># of sequences: 12</p>
        <GridLayer combo={currentCombo}>
          <ColorShapeLayer combo={currentCombo}>
            <AudioNumLayer combo={currentCombo}/>
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