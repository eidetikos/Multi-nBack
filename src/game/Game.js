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