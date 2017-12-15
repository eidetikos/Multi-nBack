import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PreGame from './PreGame';
import InGame from './InGame';
import PostGame from './PostGame';

import './Game.css';

class Game extends PureComponent {

  render() {
    const { game } = this.props;
    return (
      <main className="game">
        {game.status === 'pre' &&
          <PreGame/>
        }
        {game.status === 'in' &&
          <InGame/>
        }
        {game.status === 'post' &&
          <PostGame/>
        }
      </main>
    );
  }
}

export default connect(
  state => ({ game: state.game }),
  null
)(Game);