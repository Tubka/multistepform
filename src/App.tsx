import React from 'react';
import './App.css';
import { Authentication } from './Authentication';
import { AuthProvider } from './AuthProvider/AuthProvider';
import { useAuthState } from './AuthProvider/useAuthState';
import { Check } from './Check';
import { AdminPanel } from './components/AdminPanel/AdminPanel';
import { Unauthentication } from './Unauthentication';

const App = (): JSX.Element => {

  const Content = () => {
    const {user} = useAuthState()
    console.log(user)

    return (
      user.username ? <Authentication/> : <Unauthentication />
    )
  }

  return (
    <AuthProvider>
      <Content />
    </AuthProvider>
  )
};

export default App;

