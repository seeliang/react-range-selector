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
            initalSelected={[2,4]}
            name={'Doors'}
            range={[2,5]}
        />
      </div>
    );
  }
}

render(
  <RangeSelectorGroup/>, document.getElementById('app'));
