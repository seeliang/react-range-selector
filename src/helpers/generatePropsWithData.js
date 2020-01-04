
export const generatePropsWithData = data => {
  const { name,initialSelected,customiseRange, range, callback} = data;
  let rangeData = {};
  if (customiseRange) {
    rangeData = {customiseRange};
  }
  if (range) {
    rangeData = {range};
  }
  const props = {
    key: name,
    componentName: 'range-selector',
    initialSelected,
    name,
    rangeUpdate: callback,
    ...rangeData
  };
  return props;
};
