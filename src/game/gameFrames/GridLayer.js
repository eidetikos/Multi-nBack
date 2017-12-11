import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class GridLayer extends PureComponent {
  render() {
    const { combo } = this.props;
    return (
      <div 
        className="grid-layer"
      >
        {!combo.position &&
          this.props.children
        }
        {combo.position &&
          <div
            className="grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridTemplateRows: '1fr 1fr 1fr'
            }}
          >
            {new Array(9).fill(1).forEach((block, i) => {
              if(i === combo.position) return this.props.children;
              return <div className="grid-block"> </div>
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