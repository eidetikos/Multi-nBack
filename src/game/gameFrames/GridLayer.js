import React, { Component } from 'react';
import { connect } from 'react-redux';

import './GridLayer.css';


class GridLayer extends Component {

  handlePick = e => {
    if(this.props.inRecall) {
      const { id } = e.target;
      if(id.split('-')[0] === 'block') this.props.onPick(parseInt(id.slice(-1), 10));
    }
  }
  
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
          <div className="grid" onClick={this.handlePick}>
            {new Array(9).fill(1).map((block, i) => {
              if(i === position) return this.props.children;
              return <div key={i} id={`block-${i}`} className="grid-block"></div>;
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