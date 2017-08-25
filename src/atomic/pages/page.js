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

  render() {
    return (
      <div>
        {this.lists()}
      </div>
    );
  }
}

export default Page;
