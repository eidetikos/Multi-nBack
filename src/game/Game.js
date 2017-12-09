import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import PreGame from './PreGame';
import InGame from './InGame';
import PostGame from './PostGame';

class Game extends PureComponent {
  render() {
    const { match: { url } } = this.props;
    return (
      <main>
        <h2>Game component</h2>
        <Switch>
          <Route path={`${url}/setup`} component={PreGame}/>
          <Route path={`${url}/in-play`} component={InGame}/>
          <Route path={`${url}/over`} component={PostGame}/>
        </Switch>
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(Game);