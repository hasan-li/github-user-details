import "regenerator-runtime/runtime";
import { all } from 'redux-saga/effects';

import { usersSagas } from './users';
import { singleUserSagas } from './user';

export default function* rootSaga() {
  yield all([
    ...usersSagas,
    ...singleUserSagas,
  ]);
}
