import React from 'react';
import { shallow } from 'enzyme';
import { TopScore } from '../dashboard/communityStats/TopScore';

describe('TopScore', () => {
  it('shows TopScore component', () => {

    const wrapper = shallow(
      <TopScore />
    );
    expect(wrapper).toMatchSnapshot();
  });
});