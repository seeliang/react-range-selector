import React from 'react';

import UserLink from '../atoms/link';
import Button from '../atoms/button';
import Loading from './loading';

class Page extends React.Component {
  displayName: 'Page';
  constructor(props) {
    super(props);
    this.reload = () => {
      this.load();
    };
  }

  lists() {
    return this.props.feed.feed.results.map(
      (user,i) => {
        return (
          <UserLink
            key={i}
            name={user.name}
            to={'/people/' + i}
          />
        );
      });
  }

  load() {
    let params = this.props.feed.apiTarget;
    if (params.localeCompare(this.props.feed.apiFetched) !== 0) {
      this.props.feedFetch(params);
    }
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

export default Page;
