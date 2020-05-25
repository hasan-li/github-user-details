import findFp from 'lodash/fp/find';
import getFp from 'lodash/fp/get';
import { createSelector } from 'reselect';

export const usersReducerSelector = getFp('users');
export const userReducerSelector = getFp('user');

export const usersSelector = createSelector(
  usersReducerSelector,
  getFp('users'),
);

export const singleUserSelector = createSelector(
  userReducerSelector,
  getFp('singleUser'),
);

export const singleUserLoadingSelector = createSelector(
  userReducerSelector,
  getFp('loading'),
);

export const usersLoadingSelector = createSelector(
  usersReducerSelector,
  getFp('loading'),
);
