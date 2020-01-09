import React from 'react';
import Button from '../atoms/button';
import Loading from './loading';

class People extends React.Component {
  displayName: 'People';
  constructor(props) {
    super(props);
  }

  lists() {
    const {feed, match} = this.props;
    let people = feed.data.results[match.params.id];
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
