import {rangeToList} from '../../src/helpers';

it('should covert range to list with correct range', () => {
  expect(rangeToList([3,6])).toMatchObject([3,4,5,6]);
});
