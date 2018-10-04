import React, { Component } from "react";
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import store from './store';

export const AuthenticatedUserOnlyRoute = function ({ component: Component, ...rest }) {
    const isUserAuthenticated = (function(store) {
          const currentStates = store.getState();

          if(!currentStates.userInformations.user_id) {
            return false;
          }

          return true;
        })(store);

    return <Route {...rest} render={(props) => (
      isUserAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/loginuser' />
    )} />;
};

export const DisabledOnAuthenticatedRoute = function ({ component: Component, ...rest }) {
    const isUserAuthenticated = (function(store) {
          const currentStates = store.getState();

          if(!currentStates.userInformations.user_id) {
            return false;
          }

          return true;
        })(store);

    return <Route {...rest} render={(props) => (
      isUserAuthenticated === true
        ? <Redirect to='/generaluser' />
        : <Component {...props} />
    )} />;
};
