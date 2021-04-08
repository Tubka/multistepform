import React, { useContext, useEffect, useState } from 'react';
import logo from './logo512.png'
import classes from './LoginPage.module.css'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { IDataLogin } from '../../models/Login';
import { AuthContext } from '../../AuthProvider/useAuthState';

export const LoginPage = () => {
  const history = useHistory();
  const {state, setState} = useContext(AuthContext);
  const [dataLogin, setDataLogin] = useState<IDataLogin>({
    email: '',
    password: '',
  })

  useEffect(() => {
    console.log('asd')
  },[])


  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(dataLogin.email, dataLogin.password)

    const login = async (data: IDataLogin) => {
      console.log(data)
      setState((prev: any) => {
        return ({
          ...prev,
          status: 'pending',
        })
      })
      try {
        const result = await axios.post(`https://msf-server.azurewebsites.net/api/user/login`, data);
        console.log(result)
        if(result?.status === 200) {
          setState((prev: any) => {
            return ({
              ...prev,
              status: result.data.status,
              user: {username: 'Krzysztof?'},
              accessToken: result.data.token
            })
          })  
        }
        history.push('/admin')

      }
      catch(err) {
        console.log(err)
        alert('coś poszło nie tak, srpóbuj ponownie.')
      }
      
    }
    login(dataLogin)
  }

  // useEffect(() => {
  //   state?.user?.username && 
  // },[state])

  const handleRegistry = () => {
    history.push('/register')
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
      </form>
      <button 
        className={`${classes.button} ${classes.registryBtn}`}
        onClick={handleRegistry}>REJESTRAJCA</button>
    </div>
  )
}