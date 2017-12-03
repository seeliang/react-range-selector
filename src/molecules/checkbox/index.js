import React from 'react';
class InputCheckbox extends React.Component {
  displayName: 'InputCheckbox';
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      className: {
        active: '',
        input: this.main + '-checkbox',
        label: this.main + '-text',
        main: 'range-selector__item-input'
      }
    };
  }

  onChange() {
    this.props.inputChecked(this.props.value);
  }

  render() {
    const linked = this.props.linked,
      activeClass = this.state.className.main + ' ' + this.props.stateClass;
    return (
      <div className={activeClass}>
        <input
            checked={this.props.isSelected}
            className={this.state.className.state}
            id={linked}
            onChange={this.onChange}
            type={'checkbox'}
            value={linked}
        />
        <label
            className={this.state.className.label}
            htmlFor={linked}
        >
          {this.props.labelContent}
        </label>
      </div>
    );
  }
}

module.exports = InputCheckbox;
