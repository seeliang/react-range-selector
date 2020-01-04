import React from 'react';
import {render} from 'react-dom';
import RangeSelector from '../../src/index';

const rangeWithSelectIndexToResult = (range, selectIndex) => {
  const start = range[0];
  let result = [];
  if (!selectIndex[1]) {
    result = [start + selectIndex[0]]
  } else {
    for (let i = start + selectIndex[0]; i <= start + selectIndex[1] ; i++) {
      result.push(i);
    }
  }
  return result;
};

const listWithSelectIndexToResult = (list, selectIndex) => {
  let result = [];
  if (!selectIndex[1]) {
    result = [list[selectIndex[0]]];
  } else {
    for (let i = selectIndex[0]; i <= selectIndex[1] ; i++) {
      result.push(list[i]);
    }
  }
  return result;
};

const type = {
  cores: 'range',
  frequency: 'list'
}

const range = {
  cores:[3,8],
  frequency: [2.5,3.4,4.2,6.3]
}

class Form extends React.Component {
  displayName: 'TestForm';
  constructor(props) {
    super(props);
    this.state = {
      indexRange: {
        cores: [3,5],
        frequency: [2]
      }
    };
  }

  rangeUpdate(range,section) {
    this.setState((prev) => {
      let newSet = prev.indexRange;
      newSet[section] = range;
      return {indexRange: newSet};
    });
  }

  submit(e) {
    e.preventDefault();
    const { indexRange } = this.state
    const values = {};
    for(const i in indexRange) {
      if (type[i] === 'range') {
        values[i] = rangeWithSelectIndexToResult(range[i],indexRange[i]);
      }
      if (type[i] === 'list') {
        values[i] = listWithSelectIndexToResult(range[i],indexRange[i]);
      }
    }
    alert(JSON.stringify(values))
  }

  render() {
    return (
      <form >
      <fieldset>
      <RangeSelector componentName={'range-selector'}
        initialSelected={this.state.indexRange.cores}
        name={'cores'}
        range={range.cores}
        rangeUpdate={(r,o) => this.rangeUpdate(r,o)}
      />
      <RangeSelector componentName={'range-selector'}
        initialSelected={this.state.indexRange.frequency}
        name={'frequency'}
        customiseRange={range.frequency}
        rangeUpdate={(r,o) => this.rangeUpdate(r,o)}
      />
      <input type="submit" value="submit" onClick={e => this.submit(e)}/>
      </fieldset>
      
      </form>
    );
  }
}

render(<Form/>, document.getElementById('form'));
