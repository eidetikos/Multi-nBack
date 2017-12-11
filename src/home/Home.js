import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Home extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <main className="home">
        <h2>home component</h2>
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