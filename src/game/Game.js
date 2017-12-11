import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import PreGame from './PreGame';
import InGame from './InGame';
import PostGame from './PostGame';

class Game extends PureComponent {
  
  // set up fake data
  constructor() {
    super();
    this.state = {
      difficulty: {
        initN: 2,
        interval: 1000
      },
      numVariates: 4,
      status: 'post',
      sequences: [{
        variates: {
          position: true,
          number: true,
          audio: false,
          shape: true,
          color: true
        },
        nBack: 3,
        interval: 1000,
        combos: [{
          position: 6,
          number: 3,
          shape: 'square',
          color: 'red'
        }],
        comboPointer: 0
      }],
      finalStats: []
    };
  }

  render() {
    console.log('in Game', this.state)
    const { match: { url } } = this.props;
    return (
      <main className="game">
        <h2>Game component</h2>
        {this.state.status === 'pre' &&
          <PreGame tempGame={this.state}/>
        }
        {this.state.status === 'in' &&
          <InGame tempGame={this.state}/>
        }
        {this.state.status === 'post' &&
          <PostGame tempGame={this.state}/>
        }
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(Game);