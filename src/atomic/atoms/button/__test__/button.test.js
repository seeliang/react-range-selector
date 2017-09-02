import Button from '../index.js';
import renderer from 'react-test-renderer';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer.create(
    <Button name="google"
      action={() => {console.log('that')}}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});