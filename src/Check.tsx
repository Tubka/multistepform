import React from 'react';
import { useAuthState } from './AuthProvider/useAuthState';

export const Check = () => {
  const {user} = useAuthState()
  console.log(user)
  
  return (
    <div></div>  
  )
}