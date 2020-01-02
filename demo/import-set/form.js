import React from 'react';
import {render} from 'react-dom';
import RangeSelector from '../../src/index';


const alertValues = values => {
  alert(values);
}

class Form extends React.Component {
  displayName: 'TestForm';
  constructor(props) {
    super(props);
    this.range = {
      cores:[3,8],
      frequency: [2.5,3.4,4.2,6.3]
    }
    this.state = {
      index: {
        cores: [3,5],
        frequency: [1,2]
      }
    };
  }

  rangeUpdate(range,section) {
    this.setState((prev) => {
      let newSet = prev.index;
      newSet[section] = range;
      return {index: newSet};
    });
  }
  submit(e) {
    e. preventDefault();
    alert(JSON.stringify(this.state))
  }

  render() {
    return (
      <form >
      <fieldset>
      <RangeSelector componentName={'range-selector'}
        initalSelected={this.state.index.cores}
        name={'cores'}
        range={this.range.cores}
        rangeUpdate={(r,o) => this.rangeUpdate(r,o)}
      />
      <RangeSelector componentName={'range-selector'}
        initalSelected={this.state.index.frequency}
        name={'frequency'}
        customiseRange={this.range.frequency}
        rangeUpdate={(r,o) => this.rangeUpdate(r,o)}
      />
      <input type="submit" value="submit" onClick={e => this.submit(e)}/>
      </fieldset>
      
      </form>
    );
  }
}

render(<Form/>, document.getElementById('form'));
