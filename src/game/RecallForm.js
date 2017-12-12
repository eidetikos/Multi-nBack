import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
const variateVars = {
  position: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
  // audio: {

  // },
  number: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  color: [
    'red', 'green', 'blue', 'yellow', 'orange', 'purple'
  ],
  shape: [
    'circle', 'triangle', 'square', 'diamond', 'star', 'hexagon'
  ]
};

class RecallForm extends PureComponent {
  render() {
    const { variates, onSubmit } = this.props;
    return (
      <form className="RecallForm" onSubmit={this.props.onSubmit}>
        {Object.keys(variates).map(variate => {
          return variates[variate] ? 
            (
              <select key={variate} name={variate}>
                {variateVars[variate].map((variant, i) => (
                  <option key={i} value={variant}>{variant}</option>
                ))}
              </select>
            ) :
            null;
        })}
        <input type="submit"/>
      </form>
    );
  }
}

export default connect(
  state => ({}),
  null
)(RecallForm);