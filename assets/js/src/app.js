import React from 'react';
import {render} from 'react-dom';
import RangeSelector from './index.js';
import values from 'lodash/object/values';
import options from './load-option.js';
class RangeSelectorGroup extends React.Component{
  displayName: 'RangeSelectorGroup';
  render(){
    let rangeSelectors=[],
      selectors = values(options.selectors);
    rangeSelectors = selectors.map(
      (selector,i) => {
        return (
          <RangeSelector componentName={'range-selector'}
              customiseRange={selector.customiseRange}
              initalSelected={selector.initalSelected}
              key={i}
              name={selector.name}
              range={selector.range}
          />
        );
      }
    );
    return (
      <div className={'range-selector'}>
        {rangeSelectors}
      </div>
    );
  }
}

render(
  <RangeSelectorGroup/>, document.getElementById(options.DOMid));
