export const rangeToList = range => {
  if(!Array.isArray(range) || range.length !== 2) {
    throw new Error('range must be an Array with length of 2');
  }
  let result = [];
  const start = range[0];
  const end = range[1];
  for(let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
