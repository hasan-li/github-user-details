import axios from 'axios';
import {
  put, takeLeading,
} from 'redux-saga/effects';
import 'regenerator-runtime/runtime';

import {
  ERROR_FETCHING_SINGLE_USER,
  FETCH_USER_BY_LOGIN,
  SET_USER,
  SET_USER_LOADING,
} from '../constants/user';

const SUCCESS_STATUS = 200;

export function* fetchSingleUser({ login }: { login: string }): any {
  yield put({ type: SET_USER_LOADING, loading: true });
  const url = `https://api.github.com/users/${login}`;
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
      errorMessage: 'Please check internet connection! Failed while fetching user data.',
      type: ERROR_FETCHING_SINGLE_USER,
    });

    return;
  }

  if (data) {
    yield put({ type: SET_USER, data });
  }
}

export const singleUserSagas = [
  takeLeading(FETCH_USER_BY_LOGIN, fetchSingleUser),
];
