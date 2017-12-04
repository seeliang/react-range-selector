/* eslint-disable */

import Checkbox from '../index';
import renderer from 'react-test-renderer';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer.create(
    <Checkbox
    inputChecked={() =>{console.log(1)}}
    isSelected={true}
    key={2}
    labelContent={'3'}
    linked={'checkboxName'}
    stateClass={'is-in-range'}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});