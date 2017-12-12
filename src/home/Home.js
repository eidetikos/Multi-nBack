import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Log from './Log';

class Home extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <main className="home">
        <h2>home component</h2>
        <Log/>
        {user &&
            <h3>user stats!</h3>

        }
      </main>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  null
)(Home);