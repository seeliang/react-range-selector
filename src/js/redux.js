import React from 'react';

import * as actions from './actions';
import store from './store';
import {bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';

function mapStateTOProps() {
  return {
    feed: store.getState().feed
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

const Redux = ({content}) => {
  const ReduxMain = connect(mapStateTOProps,mapDispatchToProps)(content);
  return (
    <Provider store={store}>
      <ReduxMain/>
    </Provider>
  );
};

export default Redux;
