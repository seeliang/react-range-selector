/* eslint-disable */

import Checkbox from '../index';
import renderer from 'react-test-renderer';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer.create(
    <Checkbox stateClass={'is-in-range'} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});