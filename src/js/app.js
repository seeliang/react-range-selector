import React from 'react';
import {render} from 'react-dom';
import Index from '../atomic/pages/index';
import Page from '../atomic/pages/page';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class Root extends React.Component {
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

render(<Root/>, document.getElementById('app'));
