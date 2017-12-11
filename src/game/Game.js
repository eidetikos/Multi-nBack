import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PreGame from './PreGame';
import InGame from './InGame';
import PostGame from './PostGame';

class Game extends PureComponent {

  render() {
    const { match: { url }, game } = this.props;
    return (
      <main className="game">
        <h2>Game component</h2>
        {game.status === 'pre' &&
          <PreGame tempGame={game}/>
        }
        {game.status === 'in' &&
          <InGame tempGame={game}/>
        }
        {game.status === 'post' &&
          <PostGame tempGame={game}/>
        }
      </main>
    );
  }
}

export default connect(
  state => ({ game: state.game }),
  null
)(Game);