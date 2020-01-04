export const mappingSelectedIndexToResult = ({list, selectedIndex}) => {
  let result = [];
  if (!Array.isArray(list) || list.length < 1) {
    throw new Error('list is incorrect for mapping');
  }
  if (!selectedIndex[1]) {
    result = [list[selectedIndex[0]]];
  } else {
    for (let i = selectedIndex[0]; i <= selectedIndex[1] ; i++) {
      result.push(list[i]);
    }
  }
  return result;
};
