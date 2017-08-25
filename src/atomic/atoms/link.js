import {Link} from 'react-router-dom';
import React from 'react';

class LinkView extends React.Component {
  displayName: 'LinkView';
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to={this.props.to}>
        {this.props.name}
      </Link>
    );
  }
}

export default LinkView;
