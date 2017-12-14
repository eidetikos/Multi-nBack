import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import { PostGameStyled, ChartStats } from '../styles/style';

class PostGame extends PureComponent {
  render() {
    const finalStats = this.props.game.finalStats;
    return (finalStats.game ?
      (
        <PostGameStyled>
          <h1>{finalStats.user.name}'s Final Stats</h1>
          <ChartStats>
            {/* <ChartStyled> */}
            <Chart/>
            {/* </ChartStyled> */}
            <div>
              <h3>Your Personal Game Stats</h3>
              <ul>
                <li>
              Your highest N achieved: { finalStats.game.highN }
                </li>
                <li>
              Your average N achieved: { finalStats.game.avgN }
                </li>
              </ul>
            </div>
          </ChartStats>
        </PostGameStyled>
      ) : (
        <div className="post-game"></div>
      ));
  }
}

export default connect(
  state => ({
    game: state.game
  }),
  null
)(PostGame);