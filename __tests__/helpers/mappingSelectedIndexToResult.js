import {mappingSelectIndexToResult} from '../../src/helpers';

it('should covert range to list with correct range', () => {
  expect(mappingSelectIndexToResult({list:[3,4,5,6], selectIndex: [1,3]})).toMatchObject([4,5,6]);
});
