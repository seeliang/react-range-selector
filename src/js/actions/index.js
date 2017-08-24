import axios from 'axios';

export function feedFetch(url, dispatch = dispatch) {
  return (dispatch) => {
    dispatch({type:'FETCHING'});
    dispatch({type:'UPDATE API TARGET', content: url});
    axios.get('http://swapi.co/api/' + url)
      .then((response) => {
        dispatch({type: 'UPDATE API FETCHED', content: url});
        dispatch({type: 'RECEIVED', content: response.data});
      })
      .catch((err) => {
        dispatch({type: 'ERROR', content: err});
      });
  };
}
