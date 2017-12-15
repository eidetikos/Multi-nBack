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
        <section className="nav-button" onClick={this.handleToggle}>
          <svg>
            <title>Layer 1</title>
            <path stroke="null" fill="#d8eaec" id="svg_1" d="m4.944364,12.745821l35.111272,0c1.615119,0 2.925939,-1.456624 2.925939,-3.251393s-1.310821,-3.251393 -2.925939,-3.251393l-35.111272,0c-1.615119,0 -2.925939,1.456624 -2.925939,3.251393s1.310821,3.251393 2.925939,3.251393zm35.111272,6.502787l-35.111272,0c-1.615119,0 -2.925939,1.456624 -2.925939,3.251393s1.310821,3.251393 2.925939,3.251393l35.111272,0c1.615119,0 2.925939,-1.456624 2.925939,-3.251393s-1.310821,-3.251393 -2.925939,-3.251393zm0,13.005573l-35.111272,0c-1.615119,0 -2.925939,1.456624 -2.925939,3.251393s1.310821,3.251393 2.925939,3.251393l35.111272,0c1.615119,0 2.925939,-1.456624 2.925939,-3.251393s-1.310821,-3.251393 -2.925939,-3.251393z"/>
          </svg>
        </section>
        {this.state.collapsed &&
          <ul onClick={this.handleToggle}>
            <Link to="/">
              <li>dashboard</li>
            </Link>
            <Link to="/about#about">
              <li>about</li>
            </Link>
            {this.props.user &&
              <Link to="/game">
                <li>game</li>
              </Link>
            }
          </ul>
        }
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