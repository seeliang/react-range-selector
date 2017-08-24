import {createStore, compose} from 'redux';
import middleware from './middleware';
import reducers from './reducers';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose,
  enhancers = composeEnhancers(middleware),
  initialState = {
    feed: {
      apiFetched: '',
      apiTarget: '',
      fetched: false
    }
  };

export default createStore(
  reducers,
  initialState,
  enhancers
);
