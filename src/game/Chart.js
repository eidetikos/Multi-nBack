import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RC2 from 'react-chartjs2';

export class Chart extends PureComponent {
  render() {
    const finalStats = this.props.game.finalStats;
    return (finalStats.game.sequences ?
      (
        <div className="game-chart">
          <RC2 data={finalStats.game.sequences.nBack} type="line" width="500" height="300" redraw />
        </div>
      ) : (
        <div className="game-chart"></div>
      )
    );
  }
}

export default connect(
  state => ({
    game: state.game
  }),
  null
)(Chart);