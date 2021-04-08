import React, { useState } from 'react';
import logo from './logo512.png'
import classes from './LoginPage.module.css'

export const LoginPage = () => {
  const [dataLogin, setDataLogin] = useState<{login: string, password: string}>({
    login: '',
    password: '',
  })

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dataLogin.login, dataLogin.password);
    
  }


  return (
    <div className={classes.container} >
      <div>
        <img src={logo} alt='logo' className={classes.img}/>
      </div>
      <form className={classes.form} onSubmit={handleOnSubmit}>
        <label className={classes.label}>Login</label>
        <input 
          className={classes.input} 
          type="text" 
          value={dataLogin.login} 
          onChange={(e) => setDataLogin((prevState) => ({...prevState, ['login']: e.target.value}))}/>
        
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
    </div>
  )
}