import React, { useEffect } from 'react';
import { AdminPanel } from '../../components/AdminPanel/AdminPanel';
import { Navigation } from '../../components/Navigation/Navigation';

export const Admin = () => {
  useEffect(() => {
    console.log('asdasd')
  },[])

  return (
    <>
      <Navigation />
      <AdminPanel />
    </>
  )
}