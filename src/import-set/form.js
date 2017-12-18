import React from 'react';
import {render} from 'react-dom';
import RangeSelector from '../index';


class Form extends React.Component {
  displayName: 'TestForm';
  constructor(props) {
    super(props);
    this.state = {
      sets: {
        doors: [3,5]
      }
    };

    this.rangeUpdate = this.rangeUpdate.bind(this);
  }

  rangeUpdate(range,section) {
    this.setState((prev) => {
      let newSet = prev.sets;
      newSet[section] = range;
      return {sets: newSet};
    });
  }

  render() {
    return (
      <RangeSelector componentName={'range-selector'}
        initalSelected={this.state.sets.doors}
        name={'doors'}
        range={[3,8]}
        rangeUpdate={this.rangeUpdate}
      />
    );
  }
}

render(<Form/>, document.getElementById('form'));
