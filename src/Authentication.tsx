import React from 'react';
import { useAuthState } from './AuthProvider/useAuthState';
import { Admin } from './pages/Admin/Admin';
import { Unauthentication } from './Unauthentication';

export const Authentication = () => {
  
  return (
    <>
      <Admin />
    </>
  )
}