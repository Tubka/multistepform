import React, { ProviderProps, useState } from 'react';
import { IAuthProvider } from '../models/AuthProvider';
export interface IContextProps {
  state: IAuthProvider;
  setState: React.Dispatch<React.SetStateAction<IAuthProvider>>;
}

export const AuthContext = React.createContext<IContextProps>({state: {status: 'pending', user: null, error: null, accessToken: ''}, setState: () => {}})

export const useAuthState = () => {
  const state = React.useContext<IContextProps>(AuthContext)

  const isPending = state?.state?.status === 'pending';
  const isError = state?.state?.status === 'error';
  const isSuccess = state?.state?.status === 'success';
  const isAuthenticated = state?.state?.user && isSuccess;

    return {
      ...state,
      isPending,
      isError,
      isSuccess,
      isAuthenticated,
    }
}