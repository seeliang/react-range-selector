import React from 'react';
import {render} from 'react-dom';
import RangeSelector, {initialFormState, generatePropsWithData} from '../../src/index';

const selectors = [
  {
    name: 'Cores',
    range: [3,8]
  },
  {
    name: 'Frequency',
    customiseRange: [2.5,3.4,4.2,6.3],
    initialSelected: [0,2]
  },
  {
    name: 'PCIE slots',
    range: [1,4],
    initialSelected: [0,1]
  },
  {
    name: 'Ram size',
    customiseRange: [2,4,6,8],
    initialSelected: [2,3]
  }
];

class Form extends React.Component {
  displayName: 'TestForm';
  constructor(props) {
    super(props);
    this.state = {
      ...initialFormState(selectors)
    };
  }

  listOfSelectors () {
    return selectors.map(
      (selector) => {
        const data = {
          ...selector,
          callback: (data) => this.rangeUpdate(data)
        };
        return (
          <RangeSelector {...generatePropsWithData(data)}/>
        );
      }
    );
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
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <form >
        <fieldset>
          {this.listOfSelectors()}
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
