import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../app/App';

describe('App', () => {
  it('shows App component', () => {
    const checkForToken = () => {};
    const wrapper = shallow(
      <App checkForToken={checkForToken}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});