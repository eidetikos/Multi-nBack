import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setSettings } from './actions/actions';

import './PreGame';


class PreGame extends PureComponent {
  constructor() {
    super();
    this.state = {
      options: [2,3,4]
    };
  }

  submitSettingsHandler = event => {
    event.preventDefault();
    const difficulty = event.target.difficulty.value;
    const numVariates = event.target.numVariates.value;
    const audio = event.target.audio_choice.value === 'false' ? false : true;
    this.props.setSettings(difficulty, numVariates, audio);
  }

  handleOptions = event => {
    const newOptionState = event.target.value === 'false' ? [2,3,4] : [2,3,4,5];
    this.setState({ options: newOptionState });
  }

  render() {
    const mappedOptions = this.state.options.map((option,i) => <option key={i} value={option}>{ option }</option>);

    return (
      <div className="pre-game">
        <h3>PreGame component</h3>
        <form onSubmit={this.submitSettingsHandler}>
          <fieldset>
            <legend>Audio on/off</legend>
            <input type="radio" name="audio_choice" id="audio_choice_off" value="false" onChange={this.handleOptions} defaultChecked />
            <label htmlFor="audio_choice_off">Off</label>
            <input type="radio" name="audio_choice" id="audio_choice_on" value="true" onChange={this.handleOptions} />
            <label htmlFor="audio_choice_on">On</label>
          </fieldset>
          <fieldset>
            <legend>Variate Selection</legend>
            <select name="numVariates">
              {mappedOptions}
            </select>
          </fieldset>
          <fieldset>
            <legend>Difficulty Selection</legend>
            <div>
              <input type="radio" name="difficulty" id="difficulty_easy" value="easy" defaultChecked/>
              <label htmlFor="difficulty_easy">Easy</label>
            </div>
            <div>
              <input type="radio" name="difficulty" id="difficulty_medium" value="medium"/>
              <label htmlFor="difficulty_medium">Medium</label>
            </div>
            <div>
              <input type="radio" name="difficulty" id="difficulty_hard" value="hard"/>
              <label htmlFor="difficulty_hard">Hard</label>
            </div>
          </fieldset>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  { setSettings }
)(PreGame);