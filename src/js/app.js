import React from 'react';
import {render} from 'react-dom';

import Redux from './redux';
import Routes from './routes';

const App = () => (
  <Redux >
    <Routes/>
  </Redux>
);


render(<App/>, document.getElementById('app'));
