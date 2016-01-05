/* global window */
let options;
if (typeof window.rangeSelector !== 'undefined') {
  options = window.rangeSelector;
}
module.exports = options;
