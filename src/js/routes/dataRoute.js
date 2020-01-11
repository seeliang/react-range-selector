import React from 'react';
import {useSelector} from 'react-redux';
import { Route, Redirect} from 'react-router-dom';


const DataRoute = ({ children, ...rest }) => {
  const {feed} = useSelector(state => state);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        feed.status.fetched ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/loading',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default DataRoute;
