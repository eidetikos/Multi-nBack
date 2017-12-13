import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class PostGame extends PureComponent {
  render() {
    const finalStats = this.props.game.finalStats;
    return (
      <div className="post-game">
        <h3>PostGame component</h3>
      </div>
    );
  }
}

export default connect(
  state => ({
    game: state.game,
  }),
  null
)(PostGame);