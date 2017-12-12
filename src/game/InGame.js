import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import GridLayer from './gameFrames/GridLayer';
import ColorShapeLayer from './gameFrames/ColorShapeLayer';
import AudioNumLayer from './gameFrames/AudioNumLayer';
import RecallForm from './RecallForm';
import { checkRecall } from './actions/actions';

class InGame extends PureComponent {

  // Maybe save for later?
  // getRecalled = (variant, combination, { target }) => target[variant] ? combination[variant] = target[variant].value : null;

  recallHandler = event => {
    event.preventDefault();
    const recalled = {};
    if(event.target.position) recalled.position = event.target.position.value;
    if(event.target.color) recalled.color = event.target.color.value;
    if(event.target.shape) recalled.shape = event.target.shape.value;
    if(event.target.audio) recalled.audio = event.target.audio.value;
    if(event.target.number) recalled.number = event.target.number.value;
    this.props.checkRecall(recalled);
  };

  render() {
    const { game, game: { status } } = this.props;
    const { combos, nBack, comboPointer, inProgress, variates } = game.sequences.slice(-1)[0];
    const combo = combos && combos[comboPointer];
    console.log(combo);

    return (
      <div className="in-game">
        <h3>InGame component</h3>
        <p># of sequences: 12</p>
        {!inProgress && 
          <RecallForm onSubmit={this.recallHandler} variates={variates}/>
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
    game: state.game,
    // sequence: state.game.sequences.slice(-1)
  }),
  { checkRecall }
)(InGame);