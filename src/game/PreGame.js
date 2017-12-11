import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class PreGame extends PureComponent {
  render() {
    return (
      <div className="pre-game">
        <h3>PreGame component</h3>
        <form>
          <fieldset>
            <legend>Variate(using this name for now) Selection</legend>
            <select>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </fieldset>
          <legend>Difficulty Selection</legend>
          <fieldset>
            <div>
              <input type="radio" name="difficulty" id="difficulty_easy" value="easy"/>
              <label for="difficulty_easy">Easy</label>
            </div>
            <div>
              <input type="radio" name="difficulty" id="difficulty_medium" value="medium"/>
              <label for="difficulty_medium">Medium</label>
            </div>
            <div>
              <input type="radio" name="difficulty" id="difficulty_hard" value="hard"/>
              <label for="difficulty_hard">Hard</label>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(PreGame);