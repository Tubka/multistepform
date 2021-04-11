import React from 'react';
import { useAuthState } from './AuthProvider/useAuthState';
import { Admin } from './pages/Admin/Admin';
import { Unauthentication } from './Unauthentication';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

export const Authentication = () => {
  
  const routes =  
                  <Switch>
                    <Route path="/admin">
                      <Admin />
                    </Route>
                    <Route path="/">
                    </Route>
                  </Switch>


  return (
    <>
      {routes}
    </>
  )
}