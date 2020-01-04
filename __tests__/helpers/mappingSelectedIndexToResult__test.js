import {mappingSelectedIndexToResult} from '../../src/helpers';

it('should covert range of two points to list with correct values', () => {
  expect(mappingSelectedIndexToResult({list:[3,4,5,6], selectedIndex: [1,3]})).toMatchObject([4,5,6]);
});

it('should covert range of one points to list with correct range', () => {
  expect(mappingSelectedIndexToResult({list:[3,4,5,6], selectedIndex: [1]})).toMatchObject([4]);
});

it('should throw if list is not an array', () => {
  expect(() => {mappingSelectedIndexToResult({list: {}, selectedIndex: [1]});}).toThrow();
});

it('should throw if list is empty array', () => {
  expect(() => {mappingSelectedIndexToResult({list: [], selectedIndex: [1]});}).toThrow();
});
