import React , {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {feedFetch} from '../../js/actions';
import { HashRouter, Route, Redirect} from 'react-router-dom';
import DataRoute from './dataRoute';
import Loading from '../../atomic/pages/loading';
import Page from '../../atomic/pages/page';
import People from '../../atomic/pages/people';

const Routes = () => {
  //demo error fetch
  const {feed} = useSelector(state => state),
    dispatch = useDispatch();
  useEffect(() => {
    if(feed.status.fetched === false) {
      dispatch(feedFetch('people.jso'));
    }
  },[]);

  return (
    <HashRouter>
      <div>
        <Route exact
          path="/"
        >
          <Redirect to="/loading" />
        </Route>
        <Route path="/loading">
          <Loading />
        </Route>
        <DataRoute path="/people/:id">
          <People />
        </DataRoute>
        <DataRoute path="/page">
          <Page/>
        </DataRoute>
      </div>
    </HashRouter>
  );
};


export default Routes;
