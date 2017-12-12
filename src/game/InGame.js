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
    const { game } = this.props;
    const { combos, nBack, comboPointer, inProgress, variates } = game.sequences.slice(-1)[0];
    console.log(inProgress);


    return (
      <div className="in-game">
        <h3>InGame component</h3>
        <p># of sequences: 12</p>
        {!inProgress && 
          <RecallForm onSubmit={this.recallHandler} variates={variates}/>
        }
        {/* <GridLayer combo={currentCombo}>
          <ColorShapeLayer combo={currentCombo}>
            <AudioNumLayer combo={currentCombo}/>
          </ColorShapeLayer>
        </GridLayer> */}
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