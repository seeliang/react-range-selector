import React from 'react';
class InputCheckbox extends React.Component {
  displayName: 'InputCheckbox';
  constructor(props) {
    const stateClass = props.stateClass,
      mainClass = 'range-selector__item-input';

    super(props);
    this.onChange = this.onChange.bind(this);
    this.className = {
      mainRender: mainClass + ' ' + stateClass,
      input: mainClass + '-checkbox',
      label: mainClass + '-text',
      main: mainClass
    }
  }

  onChange() {
    this.props.inputChecked(this.props.value);
  }

  render() {
    const {isSelected, linked, labelContent} = this.props
    return (
      <div className={this.className.mainRender}>
        <input
          checked={isSelected}
          className={this.className.input}
          id={linked}
          onChange={this.onChange}
          type={'checkbox'}
          value={linked}
        />
        <label
          className={this.className.label}
          htmlFor={linked}
        >
          {labelContent}
        </label>
      </div>
    );
  }
}

module.exports = InputCheckbox;
