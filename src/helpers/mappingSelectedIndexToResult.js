export const mappingSelectIndexToResult = ({list, selectIndex}) => {
  let result = [];
  if (!Array.isArray(list) || list.length < 1) {
    throw new Error('list is incorrect for mapping');
  }
  if (!selectIndex[1]) {
    result = [list[selectIndex[0]]];
  } else {
    for (let i = selectIndex[0]; i <= selectIndex[1] ; i++) {
      result.push(list[i]);
    }
  }
  return result;
};
