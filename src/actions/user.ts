import {
  FETCH_USER_BY_LOGIN,
  SET_USER,
} from '../constants/user';

import { TUser } from '../types/user';

export const setUser = (user: TUser) => ({
  type: SET_USER,
  user,
});

export const fetchUserByLogin = (login: string) => ({
  login,
  type: FETCH_USER_BY_LOGIN,
});
