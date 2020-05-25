import React from 'react';
import { Link } from 'react-router-dom';

import { TUser } from '../../types/user';

import * as style from './style.css';

export const User = ({ user }: { user: TUser }) => {
  return (
    <div className={style.user} key={String(user.id)}>
      <img src={user.avatar_url} alt={user.login} className={style.avatar} />
      <div className={style.description}>
        <p className={style.login}>@{user.login}</p>
        <Link to={`/details/${user.login}`} replace>
          <p className={style.details}>Details ></p>
        </Link>
      </div>
    </div>
  );
};
