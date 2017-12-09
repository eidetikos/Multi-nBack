import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends PureComponent {
  render() {
    return (
      <main>
        <h3>Nav component</h3>
        <ul>
          <Link to="/">
            <li>home</li>
          </Link>
          <Link to="/about">
            <li>about</li>
          </Link>
          <Link to="/game">
            <li>game</li>
          </Link>
          <Link to="/game/setup">
            <li>game/setup</li>
          </Link>
          <Link to="/game/in-play">
            <li>game/in-play</li>
          </Link>
          <Link to="/game/over">
            <li>game/over</li>
          </Link>
        </ul>
      </main>
    );
  }
}

export default connect(
  state => ({}),
  null
)(Nav);