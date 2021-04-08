import React, {FC, useEffect, useState} from 'react';
import { Loading } from '../components/Loading/Loading';
import { IAuthProvider } from '../models/AuthProvider';
import { Unauthentication } from '../Unauthentication';
import { AuthContext } from './useAuthState';

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))
const getUser = () => sleep(3000).then(() => ({username: 'krzysiek'}))

export const AuthProvider: FC = ({children}) => {
  
    const [state, setState] = useState<IAuthProvider>({
      status: 'pending',
      error: null,
      user: null,
    })

    useEffect(() => {
      getUser().then(
        user => setState({status: 'success', error: null, user}),
        error => setState({status: 'error', error, user: null}),
      )
    }, [])

  return (
    <AuthContext.Provider value={state}>
      {state.status === 'pending' ? (
        <Loading />
      ) : state.status === 'error' ? (
        <div>
          Oh no
          <div>
            <pre>{state.error}</pre>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}