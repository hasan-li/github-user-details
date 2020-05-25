import axios from 'axios';
import {
  put, select, takeLeading,
} from 'redux-saga/effects';
import 'regenerator-runtime/runtime';

import {
  ERROR_FETCHING_USERS,
  FETCH_USERS,
  SET_LAST_RECEIVED_ID,
  SET_USERS,
} from '../constants/users';

const SUCCESS_STATUS = 200;

export function* fetchUsers(): any {
  const { users: { lastIdReceived } } = yield select();
  const url = `https://api.github.com/users?since=${lastIdReceived}`;

  const headers = {
    Accept: 'application/vnd.github.v3+json',
  };

  const res = yield axios({
    headers,
    method: 'GET',
    url,
  });

  const { status, data } = res;

  if (status !== SUCCESS_STATUS) {
    yield put({
      error: true,
      errorMessage: 'Please check internet connection! Failed while fetching users.',
      type: ERROR_FETCHING_USERS,
    });

    return;
  }

  const [lastItem] = data.slice(-1);

  if (data && data.length > 0) {
    yield put({ type: SET_USERS, data });
    yield put({ type: SET_LAST_RECEIVED_ID, lastIdReceived: lastItem.id });
  }
}

export const usersSagas = [
  takeLeading(FETCH_USERS, fetchUsers),
];
