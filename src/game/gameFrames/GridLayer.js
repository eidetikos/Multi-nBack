import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class GridLayer extends PureComponent {
  render() {
    return (
      <div className="grid-layer">
        <h2>GridLayer component</h2>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(GridLayer);