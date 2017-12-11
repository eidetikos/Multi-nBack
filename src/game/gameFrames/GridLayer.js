import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class GridLayer extends PureComponent {
  render() {
    return (
      <div 
        className="grid-layer"
        styles={{
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr'
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(GridLayer);