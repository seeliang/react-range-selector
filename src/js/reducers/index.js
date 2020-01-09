import {combineReducers} from 'redux';

const feed = (state = {}, action) => {
  switch(action.type) {
  case 'FETCHING': {
    state = {...state, status: { ...state.status,fetching: true , fetchError: false}};
    break;
  }
  case 'RECEIVED': {
    state = {...state, data:action.content, status: { ...state.status,fetching: false , fetched: true }};
    break;
  }
  case 'ERROR': {
    state = {...state, status: { ...state.status, error:action.content, fetchError: true}} ;
    break;
  }
  case 'UPDATE API FETCHED': {
    state = {...state, status: { ...state.status, apiFetched: action.content} };
    break;
  }
  case 'UPDATE API TARGET': {
    state = {...state, status: { ...state.status, apiTarget: action.content}};
    break;
  }
  }
  return state;
};

export default combineReducers({
  feed
});
