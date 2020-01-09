import React from 'react';

import UserLink from '../atoms/link';


const lists = (results) => {
    return results.map(
      (user,i) => {
        return (
          <UserLink
            key={i}
            name={user.name}
            to={'/people/' + i}
          />
        );
      });
  },

  Page = ({feed}) =>
    (
      <div>
        {lists(feed.data.results)}
      </div>
    );

export default Page;
