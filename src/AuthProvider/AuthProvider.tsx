import React, {FC, useEffect, useState} from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { resourceLimits } from 'worker_threads';
import instance from '../axios';
import { Loading } from '../components/Loading/Loading';
import { Fetcher } from '../helpers/Fetcher';
import { Requests } from '../helpers/Requests';
import { IAuthProvider } from '../models/AuthProvider';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Unauthentication } from '../Unauthentication';
import { AuthContext, useAuthState } from './useAuthState';
// import Cookies from 'js-cookie';

export const AuthProvider: FC = ({children}) => {
    const history = useHistory();
    const location = useLocation()
    const [state, setState] = useState<IAuthProvider>({
      status: 'pending',
      error: null,
      user: null,
      accessToken: '',
    })

    useEffect(() => {
      const getUser = async () => {

        const code = new URLSearchParams(location.search).get('code');
        await Requests.googleApi(code).then(r => window.localStorage.setItem('token', r.data.token)).catch(e => console.error(e));
        
        const result = await Fetcher.get('/api/user/getuserinfo');

        if (result.error) {
          
          setState({status: 'error', error: result.msg, user: null, accessToken: ''});
          return;
        }

        setState({status: 'success', error: null, user: result.data.user.email, accessToken: ''});
        history.push('/admin');
      }
      getUser()
    }, [])

  return (
    <AuthContext.Provider value={{state: state, setState: setState}}>
      {state.status === 'pending' ? (
        <Loading />
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}