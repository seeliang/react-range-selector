import React from 'react';
class InputCheckbox extends React.Component {
  displayName: 'InputCheckbox';
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.inputChecked(this.props.value);
  }

  render() {
    let mainClass = 'range-selector__item-input',
      inputClass = mainClass + '-checkbox',
      labelClass = mainClass + '-text',
      linked = this.props.linked,
      activeClass = mainClass + ' ' + this.props.stateClass;
    return (
      <div className={activeClass}>
        <input
            checked={this.props.isSelected}
            className={inputClass}
            id={linked}
            onChange={this.onChange}
            type={'checkbox'}
            value={linked}
        />
        <label
            className={labelClass}
            htmlFor={linked}
        >
          {this.props.labelContent}
        </label>
      </div>
    );
  }
}

module.exports = InputCheckbox;
