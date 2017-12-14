import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './Home.css';

class Home extends PureComponent {
  render() {
    // const { user } = this.props;
    const user = true;
    return (
      <main className="home">
        <h2>home component</h2>
        {user &&
          <section
            className="stats user-stats"
          >
            <h3>user stats!</h3>
          </section>
        }
        <section 
          className="stats community-stats"
          style={{
            width: user ? '63%' : '100%',
            float: user ? 'right' : 'center'
          }}
        >
          <h3>community stats</h3>
        </section>
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