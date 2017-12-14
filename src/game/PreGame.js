import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setSettings } from './actions/actions';

import './PreGame';


class PreGame extends PureComponent {

  submitSettingsHandler = event => {
    event.preventDefault();
    const difficulty = event.target.difficulty.value;
    const numVariates = event.target.numVariates.value;
    this.props.setSettings(difficulty, numVariates);
    
  }

  render() {
    return (
      <div className="pre-game">
        <h3>PreGame component</h3>
        <form onSubmit={this.submitSettingsHandler}>
          <fieldset>
            <legend>Variate(using this name for now) Selection</legend>
            <select name="numVariates">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
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