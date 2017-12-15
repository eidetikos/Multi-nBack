import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class TopScore extends PureComponent {

  render() {

    return (
      <article className="top-score">

      </article>
    );
  }
}

export default connect(
  state => ({}),
  null
)(TopScore);