import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUserByLogin } from '../../actions/user';
import { Loading } from '../../components';
import {
  singleUserLoadingSelector,
  singleUserSelector,
} from '../../selectors/users';

import * as style from './style.css';

export const Details = ({ login }: { login: string }) => {
  const [user, setUser] = useState(undefined);
  const dispatch = useDispatch();

  const loading = useSelector(singleUserLoadingSelector);
  const currentUser = useSelector(singleUserSelector);

  useEffect(() => {
    dispatch(fetchUserByLogin(login));
  }, []);

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  return (
    <>
      <Link to="/">
        Home
      </Link>
      <hr />
      {loading || !user ? (
        <Loading />
      ) : (
        <>
          <img src={user.avatar_url} className={style.avatar} alt={user.login} />
          <p>username: {user.login}</p>
          <p>name: {user.name}</p>
          <p>Number of public repos: {user.public_repos}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View in Github
          </a>
        </>
      )}
    </>
  );
};
