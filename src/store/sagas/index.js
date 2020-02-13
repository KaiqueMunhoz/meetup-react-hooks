import { all } from 'redux-saga/effects';

import jokesWatcherSaga from './jokesSaga';

export default function* rootSaga() {
  yield all([jokesWatcherSaga()]);
}
