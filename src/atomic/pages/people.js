import React from 'react';
import Button from '../atoms/button';
import Loading from './loading';

class People extends React.Component {
  displayName: 'People';
  constructor(props) {
    super(props);
  }

  lists() {
    let people = this.props.feed.data.results[this.props.match.params.id];
    return (
      <div>
        <h1>{people.name}</h1>
        <h2>height: {people.height}</h2>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.lists()}
      </div>
    );
  }
}

export default People;
