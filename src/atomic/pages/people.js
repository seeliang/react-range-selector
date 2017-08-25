import React from 'react';
import Button from '../atoms/button';
import Loading from './loading';

class People extends React.Component {
  displayName: 'People';
  constructor(props) {
    super(props);
  }

  lists() {
    let people = this.props.feed.feed.results[this.props.match.params.id];
    return (
      <div>
        <h1>{people.name}</h1>
        <h2>height: {people.height}</h2>
      </div>
    );
  }

  screen() {
    if(typeof this.props.feed.fetchError === 'boolean' && this.props.feed.fetchError === true) {
      return (
        <div>
          <h1> oh~ no, we have some issue from server side </h1>
          <Button action={this.reload}
            name="Try it again"
          />
        </div>
      );
    }

    if(this.props.feed.fetched === false || this.props.feed.feed.results.length < 1) {
      return <Loading />;
    }

    return (
      <div>
        {this.lists()}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.screen()}
      </div>
    );
  }
}

export default People;
