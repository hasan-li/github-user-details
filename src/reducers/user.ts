import {
  SET_USER,
  SET_USER_LOADING,
} from '../constants/user';

import { TFetchUsersAction, TUsersLoadingAction } from '../types/user';

const initialState = {
  loading: false,
  singleUser: undefined,
};

const reducer = (
  state = initialState,
  action: TFetchUsersAction & TUsersLoadingAction,
) => {
  switch (action.type) {
    case SET_USER: {
      const { data } = action;

      return {
        ...state,
        loading: false,
        singleUser: data,
      };
    }
    case SET_USER_LOADING: {
      const { loading } = action;

      return {
        ...state,
        loading,
      };
    }
    default:
      return state;
  }
};

export default reducer;
