import React, { Component } from 'react';
import { connect } from 'react-redux';

import './GridLayer.css';

class GridLayer extends Component {
  render() {
    const { position, useGrid } = this.props;
    return (
      <div 
        className="grid-layer"
      >
        {!useGrid &&
          this.props.children
        }
        {useGrid &&
          <div className="grid">
            {new Array(9).fill(1).map((block, i) => {
              if(i === position) return this.props.children;
              return <div key={i} className="grid-block"></div>;
            })}
          </div>
        }
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(GridLayer);