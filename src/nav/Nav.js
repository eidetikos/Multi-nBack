import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends PureComponent {
  render() {
    return (
      <nav>
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
        </ul>
      </nav>
    );
  }
}

export default connect(
  state => ({}),
  null
)(Nav);