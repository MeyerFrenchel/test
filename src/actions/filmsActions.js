import axios from 'axios';

export function fetchFilms(endpoints) {  
  return function(dispatch) {
    axios.get('https://swapi.py4e.com/api/films?page=${page}').then(response => {
      const listFilms = endpoints.map(endpoint => {
        return response.data.results.find(o => o.url === endpoint).title;
      });
      dispatch({
        type: 'FETCH_FILMS',
        payload: response,
        selectedFilms: listFilms
      });
    })
  }
}