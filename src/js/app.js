import React from 'react';
import {render} from 'react-dom';

import Redux from './redux';
import Routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Redux
        content={Routes}
      />
    );
  }
}

render(<App/>, document.getElementById('app'));
