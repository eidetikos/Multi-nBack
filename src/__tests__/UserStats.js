import React from 'react';
import { shallow } from 'enzyme';
import { UserStats } from '../dashboard/UserStats';

describe('UserStats', () => {
  it('shows UserStats component', () => {

    const wrapper = shallow(
      <UserStats getUserStats={() => {}}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});