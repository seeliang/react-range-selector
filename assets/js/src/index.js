import React from 'react';
import Checkbox from './input-checkbox.js';
import sortBy from 'lodash/collection/sortBy';
import takeRight from 'lodash/array/takeRight';
class RangeSelector extends React.Component{
  displayName: 'RangeSelector';
  propTypes: {
    name: React.PropTypes.string.isRequired,
    range: React.PropTypes.array.isRequired,
    componentName: React.PropTypes.string.isRequired,
    initalSelected: React.PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: props.initalSelected ? props.initalSelected : []
    };

    this.updateSelected = this.updateSelected.bind(this);
  }

  addNewNumber(array,number) {
    array.push(number);
    return sortBy(takeRight(array, 2));
  }

  updateSelected(number) {
    let newlySelected = this.state.selected.slice();
    if (newlySelected.length === 1 && newlySelected[0] === number) {
      newlySelected = [];
    } else if (newlySelected.length === 2) {
      newlySelected = [];
      newlySelected = this.addNewNumber(newlySelected,number);
    } else {
      newlySelected = this.addNewNumber(newlySelected,number);
    }

    this.setState({
      selected: newlySelected
    });
  }

  isInSelected(number) {
    let start = this.state.selected[0],
      end = this.state.selected[1];
    if(!end) {
      if (number === start) {
        return true;
      }
    } else {
      if (number >= start && number <= end) {
        return true;
      }
    }
    return false;
  }

  stateClasslist(number) {
    const inRangeClass = 'is-in-range',
      startClass = 'is-strat';
    let start = this.state.selected[0],
      end = this.state.selected[1];
    if (this.isInSelected(number)){
      if(!end) {
        return startClass;
      } else if  (number === start) {
        return startClass + ' ' + inRangeClass;
      } else if (number === end) {
        return 'is-end' + ' ' + inRangeClass;
      }
      return inRangeClass;
    }
    return '';
  }

  render() {
    let inputList=[],
      selected,
      checkboxName,
      stateClassSet,
      i ,
      rangelist=[],
      rangeStart = this.props.range[0],
      rangeEnd = this.props.range[1];

    for (i = rangeStart; i <= rangeEnd; i++ ) {
      rangelist.push(i);
    }

    inputList = rangelist.map(
      (number,i) => {
        checkboxName = this.props.componentName + '_' +
          this.props.name + '-' + number;
        selected = this.isInSelected(number);
        stateClassSet = this.stateClasslist(number);

        return (
          <Checkbox
              inputChecked={this.updateSelected}
              isSelected={selected}
              key={i}
              linked={checkboxName}
              stateClass={stateClassSet}
              value={number}
          />
        );
      },this);

    return (
      <div className={'range-selector__item'}>
        <b>{this.props.name}</b>
        {inputList}
      </div>
    );
  }
}

module.exports = RangeSelector;
