import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Details } from '../../components';
import Main from '../Main';

const Application = () => {
  const renderDetails = (props: string) => <Details login={props.match.params.login} />;

  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          path="/details/:login"
          render={renderDetails}
        />
      </Switch>
    </>
  );
};

export default Application;
