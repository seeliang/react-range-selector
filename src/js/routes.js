import React from 'react';

import { HashRouter as Router, Route, Redirect} from 'react-router-dom';

import Loading from '../atomic/pages/loading';
import Page from '../atomic/pages/page';
import People from '../atomic/pages/people';

class Routes extends React.Component {
  displayName: 'Routes';
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const {feedFetch, feed} = this.props;
    if(feed.status.fetched === false) {
      feedFetch('people.json');
    }
  }

  render() {
    const {feedFetch, feed} = this.props;
    return (
      <Router>
        <div>
          <Route exact
            path="/"
            render={() => (
              feed.status.fetched === false ? <Redirect to="/loading" /> :
                <Redirect to="/page"/>
            )}
          />
          <Route
            path="/page"
            render={() => (
              <Page
                feed={feed}
                feedFetch={feedFetch}
              />
            )}
          />
          <Route
            path="/loading"
            render={() => (
              <Loading feed={feed}
                feedFetch={feedFetch}
              />
            )}
          />
          <Route
            path="/people/:id"
            render={(props) => (
              <People
                feed={feed}
                {...props}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default Routes;
