import * as types from '../actions/actionTypes';

export default function jokes(state = {}, action = {}) {
  switch (action.type) {
    case types.JOKES.RANDOM_SUCCESS:
      return { ...state };
    case types.JOKES.RANDOM_FAILURE:
      return { ...state };
    default:
      return state;
  }
}
