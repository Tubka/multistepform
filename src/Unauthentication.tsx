import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

export const Unauthentication = () => {
  
  const routes =
  <Switch>
    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
  </Switch>
  return (
    <>
      {routes}
    </>
  )
}