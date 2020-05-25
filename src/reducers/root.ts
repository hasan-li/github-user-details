import { combineReducers } from 'redux';

import singleUserReducer from './user';
import usersReducer from './users';

export default combineReducers<Store>({
  example: (state: Store = {}) => state,
  user: singleUserReducer,
  users: usersReducer,
});
