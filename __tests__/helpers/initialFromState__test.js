import {initialFormState} from '../../src/helpers';

it('should covert selectors to state with correct data', () => {
  const selectors = [
    {
      name: 'Cores',
      range: [3,8]
    },
    {
      name: 'Frequency',
      customiseRange: [2.5,3.4,4.2,6.3],
      initialSelected: [0,2]
    },
    {
      name: 'PCIE slots',
      range: [1,4],
      initialSelected: [0,1]
    },
    {
      name: 'Ram size',
      customiseRange: [2,4,6,8],
      initialSelected: [2,3]
    }
  ];
  expect(initialFormState(selectors)).toMatchObject({indexRange: {'Frequency': [0, 2], 'PCIE slots': [0, 1], 'Ram size': [2, 3]}, values: {'Frequency': [2.5, 3.4, 4.2], 'PCIE slots': [1, 2], 'Ram size': [6, 8]}});
});
