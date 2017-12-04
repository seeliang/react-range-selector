import React from 'react';
class InputCheckbox extends React.Component {
  displayName: 'InputCheckbox';
  constructor(props) {
    const stateClass = props.stateClass,
      mainClass = 'range-selector__item-input';

    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      className: {
        mainRender: mainClass + ' ' + stateClass,
        input: mainClass + '-checkbox',
        label: mainClass + '-text',
        main: mainClass
      }
    };
  }


  onChange() {
    this.props.inputChecked(this.props.value);
  }

  render() {
    return (
      <div className={this.state.className.mainRender}>
        <input
            checked={this.props.isSelected}
            className={this.state.className.state}
            id={this.props.linked}
            onChange={this.onChange}
            type={'checkbox'}
            value={this.props.linked}
        />
        <label
            className={this.state.className.label}
            htmlFor={this.props.linked}
        >
          {this.props.labelContent}
        </label>
      </div>
    );
  }
}

module.exports = InputCheckbox;
