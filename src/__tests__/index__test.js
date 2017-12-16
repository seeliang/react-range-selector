/* eslint-disable */

import RangeSelector from '../index';
import renderer from 'react-test-renderer';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


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

it('one point select render check', () => {
  const tree = shallow(<RangeSelector componentName={'range-selector'}
    initalSelected={[4]}
    key={3}
    name={'car'}
    range={[3,5]}
  />);
  expect(tree.instance().isInSelected(4)).toEqual(true);
});

it('two points select render check', () => {
  const tree = shallow(<RangeSelector componentName={'range-selector'}
    initalSelected={[2,4]}
    key={3}
    name={'car'}
    range={[3,7]}
  />);
  expect(tree.instance().isInSelected(4)).toEqual(true);
  expect(tree.instance().isInSelected(3)).toEqual(true);
  expect(tree.instance().isInSelected(2)).toEqual(true);
});