import React from 'react';
import {render} from 'react-dom';

import Redux from './redux';
import Routes from './routes';

const App = () => (
  <Redux
    content={Routes}
  />
);

render(<App/>, document.getElementById('app'));
