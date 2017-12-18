import React from 'react';
import { shallow } from 'enzyme';
import { MostRecalled } from '../dashboard/communityStats/MostRecalled';

describe('MostRecalled', () => {
  it('shows MostRecalled component', () => {

    const wrapper = shallow(
      <MostRecalled />
    );
    expect(wrapper).toMatchSnapshot();
  });
});