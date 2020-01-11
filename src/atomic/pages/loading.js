import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../atoms/button';
import { Redirect, useLocation } from 'react-router-dom';
import {feedFetch} from '../../js/actions';

const Loading = () => {
  const {feed} = useSelector(state => state),
    dispatch = useDispatch(),
    location = useLocation(),

    { from } = location.state || { from: { pathname: '/page' } };
  if(typeof feed.status.fetchError === 'boolean' && feed.status.fetchError === true) {
    return (
      <div>
        <h1> oh~ no, we have some issue from server side </h1>
        <Button action={() => dispatch(feedFetch('people.json'))}
          name="Try it again"
        />
      </div>
    );
  }
  if(feed.status.fetched === false || feed.data.results.length < 1) {
    return  <h1> loading ... </h1>;
  }

  return <Redirect to={from} />;
};

export default Loading;
