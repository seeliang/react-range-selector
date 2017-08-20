import React from 'react';
import {render} from 'react-dom';
import Index from '../atomic/pages/index';
import Page from '../atomic/pages/page';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Index}/>
          <Route path='/page' component={Page}/>
        </div>
      </Router>
    );
  }
}

render(<Root/>, document.getElementById('app'));
