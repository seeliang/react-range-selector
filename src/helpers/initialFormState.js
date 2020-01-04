import { rangeToList } from './rangeToList';
import {mappingSelectIndexToResult} from './mappingSelectedIndexToResult';

export const initialFormState = selectors => selectors.reduce((r,i) => {
  if (!i.initialSelected) {
    return r;
  }
  const {name, initialSelected, range, customiseRange} = i;
  let list = [];
  if (range) {
    list = rangeToList(range);
  }
  if (customiseRange) {
    list = customiseRange;
  }

  const initialValue = mappingSelectIndexToResult({list,selectIndex: i.initialSelected});
  return {...r,
    indexRange: {
      ...r.indexRange,
      [name]: initialSelected
    },
    values: {
      ...r.values,
      [name]: initialValue
    }
  };
},
{
  indexRange: {},
  values:{}
}
);
