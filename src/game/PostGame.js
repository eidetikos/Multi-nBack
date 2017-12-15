import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { initSequence, newGame } from './actions/actions';
import Chart from './Chart';
import './PostGame.css';
import { ChartStats } from '../styles/style';

class PostGame extends PureComponent {

  handleReset = () => {
    console.log('WOOOHOOO', this.props);
    this.props.initSequence();
    this.props.newGame();
  }

  render() {
    const finalStats = this.props.game.finalStats;
    return (finalStats.game ?
      (
        <div className="post-game">
          <h1>{finalStats.user.name}'s Final Stats</h1>
          <ChartStats>
            <Chart/>
            <form>
              <fieldset className="post-fieldset">
                <legend>Game Stats</legend>
                <ul>
                  <li>
              Your highest N achieved: { finalStats.game.highN }
                  </li>
                  <li>
              Your average N achieved: { finalStats.game.avgN }
                  </li>
                </ul>
              </fieldset>
            </form>
            <input type="button" value="Replay" onClick={this.handleReset}/>
          </ChartStats>
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
  { initSequence, newGame }
)(PostGame);