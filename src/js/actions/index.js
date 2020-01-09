import axios from 'axios';

export function feedFetch(url, dispatch = dispatch) {
  return (dispatch) => {
    dispatch({type:'FETCHING'});
    dispatch({type:'UPDATE API TARGET', content: url});
    axios.get('/' + url)
      .then((response) => {
        dispatch({type: 'RECEIVED', content: response.data});
        dispatch({type: 'UPDATE API FETCHED', content: url});
      })
      .catch((err) => {
        dispatch({type: 'ERROR', content: err});
      });
  };
}
