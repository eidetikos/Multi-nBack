import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

const clipShape = (style, shape) => {
  switch(shape) {
    case 'circle':
      return style.borderRadius = '50%';
    case 'triangle':
      return style.clipPath = 'polygon(50% 0%, 0% 86.6%, 100% 86.6%)';
    case 'diamond':
      return style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
    case 'star':
      return style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
    case 'hexagon':
      return style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
    default:
  }
};

class ColorShapeLayer extends PureComponent {
  render() {
    const { color, shape, useColor, useShape } = this.props;

    const style = {
      height: '100%',
      width: '100%'
    };
    if(useColor) style.backgroundColor = color;
    if(useShape) clipShape(style, shape);

    return (
      <div className="color-shape-layer">
        <div style={style}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(ColorShapeLayer);