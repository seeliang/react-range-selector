import React from 'react';
import {useSelector} from 'react-redux';
import UserLink from '../atoms/link';


const lists = () => {
    const {feed} = useSelector(state => state);
    return feed.data.results.map(
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

  Page = () =>
    (<div>
      {lists()}
    </div>)
    ;

export default Page;
