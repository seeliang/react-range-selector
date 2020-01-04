import React from 'react';
import Checkbox from './molecules/checkbox';
import sortBy from 'lodash/sortBy';
import takeRight from 'lodash/takeRight';
import {rangeToList, mappingSelectIndexToResult} from './helpers';


class RangeSelector extends React.Component {
  displayName: 'RangeSelector';
  propTypes: {
    name: React.PropTypes.string.isRequired,
    range: React.PropTypes.array,
    customiseRange: React.PropTypes.array,
    componentName: React.PropTypes.string.isRequired,
    initialSelected: React.PropTypes.array
  }

  constructor(props) {
    super(props);
    this.list = [];
    if (props.range) {
      this.list = rangeToList(props.range);
    }
    if (props.customiseRange) {
      this.list = props.customiseRange;
    }

    if(props.customiseRange) {
      this.list = props.customiseRange;
    }
    this.state = {
      selected: Array.isArray(props.initialSelected) ? props.initialSelected : []
    };

    this.updateSelected = this.updateSelected.bind(this);
  }

  addNewNumber(array,number) {
    array.push(number);
    return sortBy(takeRight(array, 2));
  }

  createList() {
    let inputList = [],
      rangeList = [],
      rangeStart,
      rangeEnd;

    if (this.props.range !== undefined) {
      rangeStart = this.props.range[0],
      rangeEnd = this.props.range[1];
      for (let i = rangeStart; i <= rangeEnd; i++ ) {
        rangeList.push(i);
      }
    } else {
      rangeList = this.props.customiseRange;
    }

    inputList = rangeList.map(
      (number,i) => {
        const checkboxName = this.props.componentName + '_' +
          this.props.name.replace(/\s/g, '-').toLowerCase() + '-' + i,
          selected = this.isInSelected(i),
          stateClassSet = this.stateClasslist(i);
        return (
          <Checkbox
            inputChecked={this.updateSelected}
            isSelected={selected}
            key={i}
            labelContent={number}
            linked={checkboxName}
            stateClass={stateClassSet}
            value={i}
          />
        );
      },this);
    return inputList;
  }

  newlySelected (selected, number) {
    let newlySelected = selected.slice();
    if (newlySelected.length === 1 && newlySelected[0] === number) {
      newlySelected = [];
    } else if (newlySelected.length === 2) {
      newlySelected = [];
      newlySelected = this.addNewNumber(newlySelected,number);
    } else {
      newlySelected = this.addNewNumber(newlySelected,number);
    }
    return newlySelected;
  }

  updateSelected(number) {
    const clickSelected = this.newlySelected(this.state.selected,number);
    if (typeof this.props.rangeUpdate === 'function') {
      const data = {
        selectedIndex:clickSelected,
        section:this.props.name,
        values:mappingSelectIndexToResult({list: this.list,selectIndex: clickSelected})
      };

      this.props.rangeUpdate(data);
    }
    /*eslint-disable*/
    // need to use setState for form https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md

    this.setState((prev) => {
      const justSelected = this.newlySelected(prev.selected,number);
      return {selected: justSelected};
    });
    /*eslint-enable*/
  }

  isInSelected(number) {
    let start, end;
    if(this.state.selected.length < 1) {
      return false;
    }
    start = this.state.selected[0],
    end = this.state.selected[1];

    if(this.state.selected.length === 1) {
      if (number === start) {
        return true;
      }
    }

    if (number >= start && number <= end) {
      return true;
    }

    return false;
  }

  stateClasslist(number) {
    const inRangeClass = 'is-in-range',
      startClass = 'is-start';
    let start = this.state.selected[0],
      end = this.state.selected[1];
    if (this.isInSelected(number)) {
      if (number === start) {
        return startClass + ' ' + inRangeClass;
      } else if (number === end) {
        return 'is-end' + ' ' + inRangeClass;
      }
      return inRangeClass;
    }
    return '';
  }

  render() {
    let inputList = [];

    if (Array.isArray(this.props.range)  &&
    Array.isArray(this.props.customiseRange)) {
      throw new Error('Please use range or customiseRange, not both');
    } else if (Array.isArray(this.props.range) === false  &&
    Array.isArray(this.props.customiseRange) === false) {
      throw new Error('Please set range or customiseRange');
    }

    inputList = this.createList();

    return (
      <div className={'range-selector__item'}>
        <b className={'range-selector__item-title'}>{this.props.name}</b>
        {inputList}
      </div>
    );
  }
}

export default RangeSelector;
export * from './helpers';
