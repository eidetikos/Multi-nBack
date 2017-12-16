import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RC2 from 'react-chartjs2';


export class Chart extends PureComponent {

  render() {
    const finalStats = this.props.game.finalStats;
    const nBacks = finalStats.game.sequences.map((sequence) => sequence.nBack);
    
    const chartData = {
      labels: new Array(finalStats.game.sequences.length).fill(1).map((e, i) => i+1),
      datasets: [{
        label: 'N',
        fill: false,
        data: nBacks,
        borderColor: ' #770D00',
        borderWidth: 2,
        pointRadius: 3,
        scaleStartValue: 0
      }]
    };
    const chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1  
          }
        }]
      },
      legend: {
        display: true,
        labels: {
          boxWidth: 10,
          padding: 5
        }
      },
      title: {
        display: true,
        text: 'Sequence No. Played',
        position: 'bottom'
      },
      layout: {
        padding: {
          left: 0,
          right: 50
        }
      }
    };


    return (finalStats.game.sequences ?
      (
        <div className="game-chart">
          <RC2 data={chartData} options={chartOptions} type="line" width="500" height="300" redraw="true" />
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