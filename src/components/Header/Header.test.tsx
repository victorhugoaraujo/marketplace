import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

it('includes link to Home', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('Link').props().to).toEqual('/');
});
