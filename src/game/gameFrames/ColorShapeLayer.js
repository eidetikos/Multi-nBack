import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class ColorShapeLayer extends PureComponent {
  render() {
    return (
      <div className="color-shape-layer">
        <h2>ColorShapeLayer component</h2>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(ColorShapeLayer);