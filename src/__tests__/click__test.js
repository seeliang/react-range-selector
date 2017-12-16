/* eslint-disable */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RangeSelector from '../index';
import {shallow} from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

it('empty range click', () => {
  const tree = shallow(<RangeSelector componentName={'range-selector'}
      key={3}
      name={'car'}
      range={[3,5]}
  />);
  tree.instance().updateSelected(4);
  expect(tree.instance().state.selected).toEqual([4]);
});

it('two points click', () => {
  const tree = shallow(<RangeSelector componentName={'range-selector'}
      initalSelected={[3,4]}
      key={3}
      name={'car'}
      range={[3,5]}
  />);
  tree.instance().updateSelected(5);
  expect(tree.instance().state.selected).toEqual([5]);
});

it('one point to two points range click', () => {
  const tree = shallow(<RangeSelector componentName={'range-selector'}
      initalSelected={[4]}
      key={3}
      name={'car'}
      range={[3,5]}
  />);
  tree.instance().updateSelected(5);
  expect(tree.instance().state.selected).toEqual([4,5]);
});

it('one point to cancel click', () => {
  const tree = shallow(<RangeSelector componentName={'range-selector'}
      initalSelected={[4]}
      key={3}
      name={'car'}
      range={[3,5]}
  />);
  tree.instance().updateSelected(4);
  expect(tree.instance().state.selected).toEqual([]);
});