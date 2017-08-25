import React from 'react';

import UserLink from '../atoms/link';
import Loading from './loading';

class Page extends React.Component {
  displayName: 'Page';
  constructor(props) {
    super(props);
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

  screen() {
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
