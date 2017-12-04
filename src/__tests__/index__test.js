/* eslint-disable */

import RangeSelector from '../index';
import renderer from 'react-test-renderer';
import React from 'react';


it('both coustomiseRange and range', () => {
  const tree = renderer.create(
    <RangeSelector componentName={'range-selector'}
    customiseRange={[2,5]}
    initalSelected={[3,4]}
    key={3}
    name={'car'}
    range={[3,5]}
  />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('not coustomiseRange or range', () => {
  const tree = renderer.create(
    <RangeSelector componentName={'range-selector'}
    initalSelected={[3,4]}
    key={3}
    name={'car'}
  />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


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

it('renders inital & range', () => {
  const tree = renderer.create(
    <RangeSelector componentName={'range-selector'}
    key={3}
    name={'car'}
    range={[3,5]}
    initalSelected={[0,2]}
  />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders customise', () => {
  const tree = renderer.create(
    <RangeSelector componentName={'range-selector'}
    key={3}
    name={'car'}
    customiseRange={[0.8,1.0,1.4,1.6,1.8,2.0,2.2]}
  />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders inital & customise', () => {
  const tree = renderer.create(
    <RangeSelector componentName={'range-selector'}
    key={3}
    name={'car'}
    customiseRange={[0.8,1.0,1.4,1.6,1.8,2.0,2.2]}
    initalSelected={[0,2]}
  />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});