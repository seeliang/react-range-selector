import React from 'react';

class Button extends React.Component {
  displayName: 'Button';
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.action}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
