import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auth from '../auth/Auth';
import Nav from '../nav/Nav';

import './Header.css';

class Header extends Component {
  render() {
    const { user } = this.props;

    return (
      <header className={user ? 'collapsed-header' : 'hero-header'}>
        <h1>multi N back</h1>
        <Auth/>
        <Nav/>
      </header>  
    );
  }
}
  
export default connect(
  state => ({
    user: state.user
  }),
  null
)(Header);
  