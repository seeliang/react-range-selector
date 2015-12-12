import React from 'react';
import {render} from 'react-dom';
import RangeSelector from './index.js';
class RangeSelectorGroup extends React.Component{
  displayName: 'RangeSelectorGroup';
  propTypes: {
    option: React.PropTypes.array.isRequired
  }
  render(){
    return (
      <div className={'range-selector'}>
        <RangeSelector componentName={'range-selector'}
            name={'Seats'}
            range={[2,7]}
        />
        <RangeSelector componentName={'range-selector'}
            initalSelected={[0,2]}
            name={'Doors'}
            range={[2,5]}
        />
        <RangeSelector componentName={'range-selector'}
            customiseRange={[0.8,1.0,1.4,1.6,1.8,2.0,2.2]}
            initalSelected={[2,4]}
            name={'Engine size'}
        />
      </div>
    );
  }
}

render(
  <RangeSelectorGroup/>, document.getElementById('app'));
