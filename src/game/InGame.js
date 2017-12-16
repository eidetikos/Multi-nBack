import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import GridLayer from './gameFrames/GridLayer';
import ColorShapeLayer from './gameFrames/ColorShapeLayer';
import AudioNumLayer from './gameFrames/AudioNumLayer';
import RecallPage from './RecallPage';
import { checkRecall } from './actions/actions';

import './InGame.css';


class InGame extends PureComponent {

  recallHandler = recalled => {
    this.props.checkRecall(recalled);
  };

  render() {
    const { game } = this.props;
    const thisSequence = game.sequences.slice(-1)[0];
    const { combos, comboPointer, inProgress, variates } = thisSequence;
    const combo = combos && combos[comboPointer];

    return (
      <div className="in-game">
        {!inProgress && 
          <RecallPage 
            onRecall={this.recallHandler} 
            sequence={thisSequence}
          />
        }
        {combos && inProgress &&
          <GridLayer
            position={combo.position} 
            useGrid={variates.position}
          >
            <ColorShapeLayer 
              color={combo.color} 
              shape={combo.shape}
              useColor={variates.color}
              useShape={variates.shape}
              usePosition={variates.position}
            >
              <AudioNumLayer 
                audio={combo.audio} 
                number={combo.number}
                useAudio={variates.audio}
                useNumber={variates.number}
              />
            </ColorShapeLayer>
          </GridLayer>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    game: state.game
  }),
  { checkRecall }
)(InGame);