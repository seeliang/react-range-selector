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
      status: {
        apiFetched: '',
        apiTarget: '',
        fetched: false
      },
      data: {
        results: []
      }
    }
  };

export default createStore(
  reducers,
  initialState,
  enhancers
);
