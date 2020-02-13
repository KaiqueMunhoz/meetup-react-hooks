import * as types from './actionTypes';

export function requestRandomJokes() {
  return {
    type: types.JOKES.RANDOM_REQUEST,
  };
}

export function successRandomJokes(data) {
  return {
    type: types.JOKES.RANDOM_SUCCESS,
    payload: data.data,
  };
}

export function failureRandomJokes() {
  return {
    type: types.JOKES.RANDOM_FAILURE,
  };
}
