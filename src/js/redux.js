import React, { Children } from 'react';
import store from './store';
import {Provider} from 'react-redux';


const Redux = ({children}) => {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Redux;
