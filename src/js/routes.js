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

  componentWillMount () {
    if(this.props.feed.fetched === false) {
      this.props.feedFetch('people');
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact
            path="/"
            render={() => (this.props.feed.fetched ? (
              <Redirect to="/page"/>
            ) : (
              <Loading/>
            )
            )}
          />
          <Route
            path="/page"
            render={() => {
              return (
                <Page
                  feed={this.props.feed}
                  feedFetch={this.props.feedFetch}
                />
              );
            }
            }
          />
          <Route
            path="/people/:id"
            render={(props) => (
              <People
                feed={this.props.feed}
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
