import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RC2 from 'react-chartjs2';

export class Chart extends PureComponent {

  render() {
    const finalStats = this.props.game.finalStats;
    const nBacks = finalStats.game.sequences.map((sequence) => sequence.nBack).reverse();
    nBacks.pop();
    const chartData = {
      labels: new Array(finalStats.game.sequences.length+1).fill(1).map((e, i) => i+1),
      datasets: [{
        label: 'N',
        fill: false,
        data: nBacks,
        // backgroundColor: '#770D00',
        borderColor: ' #770D00',
        borderWidth: 2,
        pointRadius: 3,
        scaleStartValue: 0
      }]
      // options: {
      //   scales: {
      //     yAxes: [{
      //       ticks: {
      //         max: 10,
      //         min: 0
      //       }
      //     }]
      //   },
      //   legend: {
      //     display: true,
      //     labels: {
      //       boxWidth: 10,
      //       padding: 5
      //     }
      //   },
      //   title: 'No. of Sequence Played'
      // }
    };

    return (finalStats.game.sequences ?
      (
        <div className="game-chart">
          <RC2 data={chartData} type="line" width="500" height="300" redraw="true" />
          {/* <RC2 data={finalStats.game.sequences.nBack} type="line" width="500" height="300" redraw /> */}
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