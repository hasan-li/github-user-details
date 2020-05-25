import {
  FETCH_USERS,
  LOADING_USERS,
  SET_USERS,
} from '../constants/users';

import { TUser } from '../types/user';

export const setUsers = (users: TUser[]) => ({
  type: SET_USERS,
  users,
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const setLoadingUsers = (loading: boolean) => ({
  loading,
  type: LOADING_USERS,
});
