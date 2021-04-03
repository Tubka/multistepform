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
  // <Router>
                    // <div>
                      {/* <nav>
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/users">Users</Link>
                          </li>
                        </ul>
                      </nav> */}

                      {/* A <Switch> looks through its children <Route>s and
                          renders the first one that matches the current URL. */}
                      <Switch>
                        {/* <Route path="/Login">
                          <LoginPage />
                        </Route> */}

                        
                        <Route path="/admin">
                          <Admin />
                        </Route>
                        <Route path="/">
                          {/* <Home /> */}
                        </Route>
                      </Switch>
                    {/* </div> */}
                  {/* </Router> */}

  return (
    <>
      {routes}
    </>
  )
}