import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { initSequence, newGame, replay } from './actions/actions';
import Chart from './Chart';
import './PostGame.css';


class PostGame extends PureComponent {

  handleReset = () => this.props.replay();
  handleChangeSettings = () => this.props.newGame();

  render() {
    const finalStats = this.props.game.finalStats;

    return (finalStats.game ?
      (
        <div className="post-game">
          <div className="post-chart">
            <h5>{finalStats.user.name}'s Final Stats</h5>
            <Chart/>
          </div>
          <div className="post-stats">
            <fieldset className="post-field">
              <legend>Game Stats</legend>
              <p>highest N: {finalStats.game.highN}</p>
              <p>average N: {finalStats.game.avgN}</p>
            </fieldset>
            <div className="post-button">
              <div>
                <input type="button" name="replay" id="replay" value="Replay" onClick={this.handleReset}/>
              </div>
              <div>
                <input type="button"  name="change-settings" id="change-settings" value="Settings" onClick={this.handleChangeSettings}/>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="post-game"></div>
      ));
  }
}

export default connect(
  state => ({
    game: state.game
  }),
  { initSequence, newGame, replay }
)(PostGame);
