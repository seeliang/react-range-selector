import {combineReducers} from 'redux';

const feed = (state = {}, action) => {
  switch(action.type) {
  case 'FETCHING': {
    state = {...state, fetching: true, fetchError: false};
    break;
  }
  case 'RECEIVED': {
    state = {...state, data:action.content, fetched: true, fetching: false };
    break;
  }
  case 'ERROR': {
    state = {...state, error:action.content, fetchError: true, fetching: false};
    break;
  }
  case 'UPDATE API FETCHED': {
    state = {...state, apiFetched: action.content};
    break;
  }
  case 'UPDATE API TARGET': {
    state = {...state, apiTarget: action.content};
    break;
  }
  }
  return state;
};

export default combineReducers({
  feed
});
