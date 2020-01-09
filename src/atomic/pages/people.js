import React from 'react';

const People = ({feed, match}) => {
  let people = feed.data.results[match.params.id];
  return (
    <div>
      <h1>{people.name}</h1>
      <h2>height: {people.height}</h2>
    </div>
  );
};

export default People;
