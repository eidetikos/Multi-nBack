import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PreGame from './PreGame';
import InGame from './InGame';
import PostGame from './PostGame';

import './Game.css';

const Games = {
  pre: PreGame,
  in: InGame,
  post: PostGame
};

class Game extends PureComponent {

  render() {
    const { game } = this.props;
    const Game = Games[game.status];

    return (
      <main className="game">
        <Game key={game.status}/>
      </main>
    );
  }
}

export default connect(
  state => ({ game: state.game }),
  null
)(Game);