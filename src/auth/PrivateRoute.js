import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Log from './Log';

const PrivateRoute = ({ component: Component, render, ...rest }) => (
  <Route {...rest} render={props => {

    if(localStorage.getItem('token')) {
      return render ? render(props) : <Component {...props}/>;
    }
    else {
      return (
        <Log/>
      );
    }
  }}/>
);

export default connect(
  state => ({}),
  null
)(PrivateRoute);