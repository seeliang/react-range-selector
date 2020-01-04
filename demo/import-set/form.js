import React from 'react';
import {render} from 'react-dom';
import RangeSelector, {rangeToList, mappingSelectIndexToResult} from '../../src/index';


const type = {
  cores: 'range',
  frequency: 'list'
};

const range = {
  cores:[3,8],
  frequency: [2.5,3.4,4.2,6.3]
};

class Form extends React.Component {
  displayName: 'TestForm';
  constructor(props) {
    super(props);
    this.initialSelected = {
      cores: [3,5],
      frequency: [2]
    };
    this.lists = {
      cores: rangeToList(range.cores),
      frequency: range.frequency
    };
    this.state = {
      indexRange: this.initialSelected,
      values: {
        cores: mappingSelectIndexToResult({list: this.lists.cores, selectIndex: this.initialSelected.cores}),
        frequency: mappingSelectIndexToResult({list: this.lists.frequency, selectIndex: this.initialSelected.frequency})
      }
    };
  }

  rangeUpdate({selectedIndex,section,values}) {
    this.setState((prev) => {
      let newSet = prev.indexRange,
        newValues = prev.values;
      newSet[section] = selectedIndex;
      newValues[section] = values;
      return {indexRange: newSet, values: newValues};
    });
  }

  submit(e) {
    e.preventDefault();
    const { indexRange } = this.state;
    const values = {};
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <form >
        <fieldset>
          <RangeSelector componentName={'range-selector'}
            initialSelected={this.state.indexRange.cores}
            name={'cores'}
            range={range.cores}
            rangeUpdate={(data) => this.rangeUpdate(data)}
          />
          <RangeSelector componentName={'range-selector'}
            customiseRange={range.frequency}
            initialSelected={this.state.indexRange.frequency}
            name={'frequency'}
            rangeUpdate={(data) => this.rangeUpdate(data)}
          />
          <input onClick={e => this.submit(e)}
            type="submit"
            value="submit"
          />
        </fieldset>

      </form>
    );
  }
}

render(<Form/>, document.getElementById('form'));
