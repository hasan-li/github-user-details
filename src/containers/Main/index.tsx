import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../actions';
import { Loading, User } from '../../components';
import {
  usersLoadingSelector,
  usersSelector,
} from '../../selectors/users';

import { TUser } from '../../types/user';

const Application = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const loading = useSelector(usersLoadingSelector);

  const getRenderedUsers = () => {
    return users.map((user: TUser) => <User key={String(user.id)} user={user} />);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const getUsers = () => dispatch(fetchUsers());

  return (
    <>
      {loading ?
      <Loading />
      : (
        <InfiniteScroll
          pageStart={0}
          loadMore={getUsers}
          hasMore={true || false}
          loader={<Loading key={0} />}
        >
          {getRenderedUsers()}
        </InfiniteScroll>
      )}
    </>
  );
};

export default Application;
