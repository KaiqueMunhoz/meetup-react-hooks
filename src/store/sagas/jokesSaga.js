import { takeLatest, call, put } from 'redux-saga/effects';

// Actions
import * as types from '../actions/actionTypes';
import * as jokesAction from '../actions/jokesAction';

import instance from '../../config/axios';

function* getRandomJokes() {
  try {
    const response = yield call(instance.get);
    console.log('response', response);
    // yield put(jokesAction.successRandomJokes(response));
  } catch (error) {
    // yield put(jokesAction.failureRandomJokes(error));
  }
}

export default function* jokesWatcherSaga() {
  yield takeLatest(types.JOKES.RANDOM_REQUEST, getRandomJokes);
}
