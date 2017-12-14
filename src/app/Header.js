import React, { Component } from 'react';

import Auth from '../auth/Auth';
import Nav from '../nav/Nav';

class Header extends Component {
  render() {

    return (
      <header>
        <h1>Memory App</h1>
        <Auth/>
        <Nav/>
      </header>  
    );
  }
}
  
export default Header;
  