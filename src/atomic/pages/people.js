import React from 'react';
import { useSelector} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';

const People = () => {
  const {feed} = useSelector(state => state),
    match = useRouteMatch('/people/:id');
  let people = feed.data.results[match.params.id];
  return (
    <div>
      <h1>{people.name}</h1>
      <h2>height: {people.height}</h2>
    </div>
  );
};

export default People;
