import {generatePropsWithData} from '../../src/helpers';

it('should covert data to props with correct data', () => {
  const selectors =
    {
      name: 'Frequency',
      customiseRange: [2.5,3.4,4.2,6.3],
      initialSelected: [0,2],
      callback: {}
    };
  expect(generatePropsWithData(selectors)).toMatchObject(
    {componentName: 'range-selector',
      customiseRange: [2.5, 3.4, 4.2, 6.3],
      initialSelected: [0, 2],
      key: 'Frequency',
      name: 'Frequency',
      rangeUpdate: {}});
});
