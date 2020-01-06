import RangeSelector from '../../lib/index.js';
import renderer from 'react-test-renderer';
import React from 'react';

it('renders range', () => {
  const tree = renderer.create(
    <RangeSelector componentName={'range-selector'}
      key={3}
      name={'car'}
      range={[3,5]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
