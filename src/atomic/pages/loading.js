import React from 'react';
import Button from '../atoms/button';
import { Redirect } from 'react-router-dom';

class Loading extends React.Component {
  displayName: 'Loading';
  constructor(props) {
    super(props);
    this.reload = () => {
      this.load();
    };
  }

  load() {
    this.props.feedFetch('people.json');
  }

  render() {
    const {feed} = this.props;
    if(typeof feed.fetchError === 'boolean' && feed.fetchError === true) {
      return (
        <div>
          <h1> oh~ no, we have some issue from server side </h1>
          <Button action={this.reload}
            name="Try it again"
          />
        </div>
      );
    }

    if(feed.fetched === false || feed.feed.results.length < 1) {
      return  <h1> loading ... </h1>;
    }

    return <Redirect to="/page"/>;

  }
}

export default Loading;
