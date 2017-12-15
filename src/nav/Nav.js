import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Nav.css';

class Nav extends PureComponent {

  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  handleToggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

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
          {this.props.user &&
            <Link to="/game">
              <li>game</li>
            </Link>
          }
        </ul>
      </nav>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  null
)(Nav);