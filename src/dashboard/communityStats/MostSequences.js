import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class MostSequences extends PureComponent {

  render() {

    return (
      <article className="most-sequences">

      </article>
    );
  }
}

export default connect(
  state => ({}),
  null
)(MostSequences);