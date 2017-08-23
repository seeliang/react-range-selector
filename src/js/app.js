import React from 'react';
import {render} from 'react-dom';

import Redux from './redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Redux/>
    );
  }
}

render(<App/>, document.getElementById('app'));
