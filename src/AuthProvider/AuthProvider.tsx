import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { resourceLimits } from 'worker_threads';
import { Loading } from '../components/Loading/Loading';
import { IAuthProvider } from '../models/AuthProvider';
import { Unauthentication } from '../Unauthentication';
import { AuthContext } from './useAuthState';
const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))
const getUser = () => sleep(3000).then(() => ({username: null}))

export const AuthProvider: FC = ({children}) => {
    const history = useHistory()
  
    const [state, setState] = useState<IAuthProvider>({
      status: 'pending',
      error: null,
      user: null,
      accessToken: '',
    })

    useEffect(() => {
      //get token and refToken, if you don't have access and refresh, go to page /login. If
      // you have refresh token, post refresh token to get user

      // const getUserByRefreshToken = async (refreshToken) => {
      //   try {
      //     const result = await axios.post('/', refreshToken)
      //     if (result.status === 200) {
      //       setState({status: 'success', error: null, user: result.data?.user, accessToken: 'asd'})
      //     }
      //   }
      //   catch(err) {
      //     setState({status: 'error', error: err.result?.error, user: null, accessToken: 'asd'})
      //   }
      // }
      // getUserByRefreshToken(refreshToken)

      getUser().then(
        user => setState({status: 'success', error: null, user, accessToken: 'asd'}),
        error => setState({status: 'error', error, user: null, accessToken: 'asd'}),
      )
      history.push('/admin')
    }, [])

  return (
    <AuthContext.Provider value={{state: state, setState: setState}}>
      {state.status === 'pending' ? (
        <Loading />
      ) : state.status === 'error' ? (
        <div style={{backgroundColor: 'red'}}>Fail</div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}