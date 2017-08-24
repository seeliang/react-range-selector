import React from 'react';

import Routes from './routes.js';

import * as actions from './actions';
import store from './store';
import {bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';

function mapStateTOProps() {
  return {
    feed: store.getState().feed
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

const ReduxMain = connect(mapStateTOProps,mapDispachToProps)(Routes);

class Redux extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxMain/>
      </Provider>
    );
  }
}

export default Redux;
