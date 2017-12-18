import React from 'react';
import { shallow } from 'enzyme';
import { HighestN } from '../dashboard/communityStats/HighestN';

describe('HighestN', () => {
  it('shows HighestN component', () => {

    const wrapper = shallow(
      <HighestN />
    );
    expect(wrapper).toMatchSnapshot();
  });
});