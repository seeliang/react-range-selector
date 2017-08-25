import React from 'react';
import Button from '../atoms/button';

class Loading extends React.Component {
  displayName: 'Loading';
  constructor(props) {
    super(props);
    this.reload = () => {
      this.load();
    }
  }

  load() {
    let params = this.props.feed.apiTarget;
    if (params.localeCompare(this.props.feed.apiFetched) !== 0) {
      this.props.feedFetch(params);
    }
  }

  render() {
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
      return  <h1> loading ... </h1>;
    }

  }
}

export default Loading;
