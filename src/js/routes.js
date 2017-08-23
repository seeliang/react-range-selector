import React from 'react';

import { HashRouter as Router, Route} from 'react-router-dom';

import Index from '../atomic/pages/index';
import Page from '../atomic/pages/page';

class Routes extends React.Component {
  displayName: 'Routes';
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Route
            component={Index}
            exact
            path="/"
          />
          <Route
            component={Page}
            path="/pages"
          />
        </div>
      </Router>
    );
  }
}

export default Routes;
