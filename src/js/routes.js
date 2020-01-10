import React , {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {feedFetch} from '../js/actions';
import { HashRouter as Router, Route, Redirect} from 'react-router-dom';

import Loading from '../atomic/pages/loading';
import Page from '../atomic/pages/page';
import People from '../atomic/pages/people';

const
  Routes = () => {
  //demo error fetch
    const {feed} = useSelector(state => state),
      dispatch = useDispatch();
    useEffect(() => {
      if(feed.status.fetched === false) {
        dispatch(feedFetch('people.jso'));
      }
    },[]);

    return (
      <Router>
        <div>
          <Route path="/" >
            <Redirect to="/loading" />
          </Route>
          <Route path="/loading">
            <Loading />
          </Route>
          <Route
            path="/people/:id"
            render={(props) => (
              <People
                {...props}
              />
            )}
          />
          <Route path="/page">
            <Page/>
          </Route>
        </div>
      </Router>
    );
  };


export default Routes;
