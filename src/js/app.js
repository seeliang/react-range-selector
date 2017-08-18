import React from 'react';
import {render} from 'react-dom';

class Root extends React.Component {
  render() {
    return (
      <h1> Hello </h1>
    );
  }
}

render(<Root/>, document.getElementById('app'));
