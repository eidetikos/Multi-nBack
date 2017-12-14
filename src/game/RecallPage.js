import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { CirclePicker as ColorPicker } from 'react-color';
import GridLayer from './gameFrames/GridLayer';
import ColorShapeLayer from './gameFrames/ColorShapeLayer';
import AudioNumLayer from './gameFrames/AudioNumLayer';

import './RecallPage.css';




const variateVars = {
  position: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
  audio: [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ],
  number: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  color: [
    'red', 'green', 'blue', 'yellow', 'orange', 'purple'
  ],
  shape: [
    'circle', 'triangle', 'square', 'diamond', 'star', 'hexagon'
  ]
};

'#f00', '#ffa500', '#ff0', '#008000', '#00f', '#800080'

const translateColor = color => {
  let colorMap = {
    red: '#ff0000',
    orange: '#ffa500',
    yellow: '#ffff00',
    green: '#008000', 
    blue: '#0000ff', 
    purple: '#800080'
  };
  if(color.slice(0, 1) === '#') {
    const switchedMap = {};
    Object.keys(colorMap).forEach(key => switchedMap[colorMap[key]] = key);
    colorMap = switchedMap;
  }
  return colorMap[color];
};




class RecallPage extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  
  componentDidMount() {
    const { sequence: { variates } } = this.props,
      tempState = {};

    tempState.pickerWindowToggle = false;

    Object.keys(variates).forEach(variate => {
      if(variates[variate]) tempState[variate] = variateVars[variate][0];
    });
    if(variates.shape) tempState.shape = 0;

    this.setState(tempState);
  }

  handlePick = variate => pick => {
    console.log('variate', variate);
    
    if(variate === 'color') pick = translateColor(pick.hex);
    if(variate === 'shape') pick = this.state.shape < 5 ? this.state.shape + 1 : 0;
    if(variate === 'audio') {
      if(pick.target.id.split('-')[0] === 'audio') pick = pick.target.innerText;
      else return;
    }

    console.log('pick', pick);
    this.setState({ [variate]: pick });
  }

  handleSubmit = () => {

    const recalled = { ...this.state };
    delete recalled.pickerWindowToggle;
    if(typeof recalled.shape === 'number') recalled.shape = variateVars.shape[recalled.shape];
    
    this.props.onRecall(recalled);
  }

  render() {
    const { 
      onSubmit,
      sequence: { variates, nBack }
    } = this.props;

    const {
      position, color, shape, audio, number
    } = this.state;

    console.log(variates);

    return (
      <div className="recall-page">
        <h3 className="n-back-display">nBack: {nBack}</h3>
        {variates && 
          <div className="recall-page-top">
            <GridLayer
              position={position} 
              useGrid={variates.position}
              inRecall={true}
              onPick={this.handlePick('position')}
            >
              <ColorShapeLayer 
                color={color} 
                shape={variateVars.shape[shape]}
                useColor={variates.color}
                useShape={variates.shape}
                usePosition={variates.position}
              >
                <AudioNumLayer 
                  audio={audio} 
                  number={number}
                  useAudio={variates.audio}
                  useNumber={variates.number}
                  inRecall={true}
                  onNumberPick={this.handlePick('number')}
                  onColorPick={this.handlePick('shape')}
                />
              </ColorShapeLayer>
            </GridLayer>
            <div className="audio-picker" onClick={this.handlePick('audio')}>
              {new Array(9).fill(1).map((ele, i) => {
                return audio === variateVars.audio[i] ? (
                  <section 
                    key={i}  
                    name={variateVars.audio[i]}
                    style={{
                      backgroundColor: 'lightblue'
                    }}
                  >
                    <span style={{ float: 'left' }}>&#128266;</span>
                    {variateVars.audio[i]}
                  </section>
                ) : (
                  <section key={i} id={`audio-${variateVars.audio[i]}`}>{variateVars.audio[i]}</section>
                );
              })}
              {!audio &&
                <div className="audio-screen"></div>
              }
            </div>
          </div>
        }
        {variates &&
          <ColorPicker
            color={color ? translateColor(color) : '#f00'}
            onChange={color ? this.handlePick('color') : null}
            width="100%"
            colors={variates.color ?
              ['#f00', '#ffa500', '#ff0', '#008000', '#00f', '#800080'] :
              ['#ffe5e5', '#fff6e5', '#ffffe5', '#e5f2e5', '#e5e5ff', '#f2e5f2']
            }
            circleSize={30}
            circleSpacing={0}
          />
        }
        <div className='submit-recall-button' onClick={this.handleSubmit}>
          Submit
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  null
)(RecallPage);



{/* <form className="recall-form" onSubmit={onSubmit}>
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
</form> */}