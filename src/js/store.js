import {createStore, compose} from 'redux';
import reducers from './reducers';


const initialState = {
  feed: {
    apiFetched: '',
    apiTarget: '',
    fetched: false
  }
};

export default createStore(
  reducers,
  initialState
);
