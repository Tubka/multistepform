import React, { useContext, useEffect, useState } from 'react';
import logo from './logo512.png'
import classes from './LoginPage.module.css'
import { Link, useHistory } from "react-router-dom";
import { IDataLogin } from '../../models/Login';
import { useAuthState } from '../../AuthProvider/useAuthState';
import { Fetcher } from '../../helpers/Fetcher';
import { IAuthProvider } from '../../models/AuthProvider';
import GoogleButton from 'react-google-button'
import  {GoogleLogin}  from 'react-google-login'
export const LoginPage = () => {
  const history = useHistory();
  const {state, setState} = useAuthState(); // TODO
  const [dataLogin, setDataLogin] = useState<IDataLogin>({
    email: '',
    password: '',
  })

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const login = async (data: IDataLogin) => {
      setState((prev: IAuthProvider) => ({...prev, status: 'pending'}))
      const result = await Fetcher.post(`https://msf-server.azurewebsites.net/api/user/login`, data);

      if(result.error)  {
        alert('wpisz poprawne dane')
        setState((prev: IAuthProvider) => ({...prev, status: "error"}))
        return;
      }

      localStorage.setItem('token', result.data.token);
      setState((prev: IAuthProvider) => {
        return ({
          ...prev,
          status: result.data.status,
          user: 'Krzysztof',
          accessToken: result.data.token
        })
      })  
      history.push('/admin')
    }
    
    login(dataLogin)
  }

  const handleRegistry = () => {
    history.push('/register')
  }

  const handleGoogleApi = (e:any) => {
    e.preventDefault();
    
    history.push('/collback');
  }

  return (
    <div className={classes.container} >
      <div>
        <img src={logo} alt='logo' className={classes.img}/>
      </div>
      <form className={classes.form} onSubmit={handleOnSubmit}>
        <label className={classes.label}>E-mail</label>
        <input 
          className={classes.input} 
          type="text" 
          value={dataLogin.email} 
          onChange={(e) => setDataLogin((prevState) => ({...prevState, ['email']: e.target.value}))}/>
        
        <label className={classes.label}>Password</label>
          <input 
            className={classes.input} 
            type="password" 
            value={dataLogin.password} 
            onChange={(e) => setDataLogin((prevState) => ({...prevState, ['password']: e.target.value}))}/>
          <button className={classes.button}>
            ZALOGUJ
          </button>
          
          <Link to={{ pathname: "https://msf-server.azurewebsites.net/api/user/google" }} target="_parent" className={classes.googleLink}><GoogleButton /></Link>
          <button
            className={`${classes.button} ${classes.registryBtn}`}
            onClick={handleRegistry}>REJESTRAJCA</button>
      </form>
    </div>
  )
}