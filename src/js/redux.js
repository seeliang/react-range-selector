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

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions,dispatch);
}

class Redux extends React.Component {
  displayName: 'Redux';
  constructor(props) {
    super(props);
  }

  render() {
    const ReduxMain = connect(mapStateTOProps,mapDispachToProps)(this.props.content);
    return (
      <Provider store={store}>
        <ReduxMain/>
      </Provider>
    );
  }
}

export default Redux;
