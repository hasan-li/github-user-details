import { union } from 'lodash';

import {
  SET_LAST_RECEIVED_ID,
  SET_USERS,
} from '../constants/users';

import { TFetchUsersAction, TUsersLastReceivedAction } from '../types/user';

const initialState = {
  lastIdReceived: 1,
  loading: true,
  users: undefined,
};

const reducer = (
  state = initialState,
  action: TFetchUsersAction & TUsersLastReceivedAction,
) => {
  switch (action.type) {
    case SET_USERS: {
      const { data } = action;
      const users = union(state.users, data);

      return {
        ...state,
        loading: false,
        users,
      };
    }
    case SET_LAST_RECEIVED_ID: {
      const { lastIdReceived } = action;

      return {
        ...state,
        lastIdReceived,
      };
    }
    default:
      return state;
  }
};

export default reducer;
