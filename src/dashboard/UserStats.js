import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// import './UserStats.css';

class UserStats extends PureComponent {
  render() {

    return (

      <section
        className="stats user-stats"
      >
        <h3>user stats!</h3>
      </section>
    );
  }
}

export default connect(
  state => ({}),
  null
)(UserStats);