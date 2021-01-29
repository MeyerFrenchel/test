import axios from 'axios';

export function fetchPlanets(page) {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_PLANETS',
      payload: axios.get(`https://swapi.py4e.com/api/planets?page=${page}`)
    });
  }
}

export function selectPlanet(planet) {
  return function(dispatch) {
    dispatch({
      type: 'SELECT_PLANET',
      payload: planet
    });
  }
}

export function getPlanet(id) {
  return function(dispatch) {
    dispatch({
      type: 'GET_PLANET',
      payload: axios.get(`https://swapi.py4e.com/api/planets/${id}`)
    });
  }
}