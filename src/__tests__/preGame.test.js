import React from 'react';
import { shallow } from 'enzyme';
import { PreGame } from '../game/PreGame';

describe('PreGame', () => {
  it('shows PreGame component', () => {
    const wrapper = shallow(
      <PreGame/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});