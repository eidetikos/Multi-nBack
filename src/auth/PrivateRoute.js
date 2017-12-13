import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Log from './Log';

const PrivateRoute = ({ component: Component, render, ...rest }) => (
  <Route {...rest} render={props => {
    console.log('private route', localStorage.getItem('token'));
    if(localStorage.getItem('token')) {
      console.log('in if statement');
      return render ? render(props) : <Component {...props}/>;
    }
    else {
      console.log('in else statement');
      return (
        <Log/>
      );
    }
  }}/>
);


// export default PrivateRoute;
export default connect(
  state => ({}),
  null
)(PrivateRoute);