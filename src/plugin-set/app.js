import React from 'react';
import {render} from 'react-dom';
import RangeSelector from '../index';
import options from './load-option.js';

class RangeSelectorGroup extends React.Component {
  displayName: 'RangeSelectorGroup';
  propTypes: {
    selectors: React.PropTypes.array.isRequired
  }
  render() {
    let rangeSelectors = [],
      selectors = this.props.selectors;
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

options.forEach(
  option => {
    render (
      React.createFactory(RangeSelectorGroup)(option), document.getElementById(option.DOMid)
    );
  }
);
