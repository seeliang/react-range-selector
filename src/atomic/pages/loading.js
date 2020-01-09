import React from 'react';
import Button from '../atoms/button';
import { Redirect } from 'react-router-dom';

class Loading extends React.Component {
  displayName: 'Loading';
  constructor(props) {
    super(props);
  }

  load() {
    this.props.feedFetch('people.json');
  }

  render() {
    const {feed} = this.props;
    if(typeof feed.status.fetchError === 'boolean' && feed.status.fetchError === true) {
      return (
        <div>
          <h1> oh~ no, we have some issue from server side </h1>
          <Button action={() => this.load()}
            name="Try it again"
          />
        </div>
      );
    }

    if(feed.status.fetched === false || feed.data.results.length < 1) {
      return  <h1> loading ... </h1>;
    }

    return <Redirect to="/page"/>;

  }
}

export default Loading;
