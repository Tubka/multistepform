import React, { useState } from 'react';
import logo from './logo512.png';
import classes from './RegisterPage.module.css';
import axios from 'axios';
import { IDataLogin } from '../../models/Login';
import { useHistory } from 'react-router-dom';

export const RegisterPage = () => {
  const history = useHistory()
  const [errors, setErrors] = useState<string[]>([])  
  const [dataLogin, setDataLogin] = useState<IDataLogin>({
    email: '',
    password: '',
    repeatPassword: '',
  })

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errorsArr = [];
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    const emailRegex = new RegExp('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')
    if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(dataLogin.email))) {
      errorsArr.push('Błędny e-mail');
    }
    if(dataLogin.password === '') {
      errorsArr.push('Wpisz password');
    }
    if(dataLogin.password !== '' && !strongRegex.test(dataLogin.password)) {
      errorsArr.push('Wprowadź mocniejsze hasło. Musisz użyć znaku specjalnego, małej i dużej litery oraz cyfry, hasło nie krótsze od 8 znaków')
    }
    if(dataLogin.repeatPassword !== dataLogin.password) {
      errorsArr.push('Hasła nie są zgodne');
    }
    if(errorsArr.length) {
      setErrors(errorsArr);
    }
    if(errorsArr?.length) return;

    const sendAcc = async (data: IDataLogin): Promise<unknown> => {
      try {
        const result = await axios.post(`https://msf-server.azurewebsites.net/api/user/signup`, data)
        history.push('/login');
        return
      }
      catch(err) {
        alert('coś poszło nie tak, spróbuj ponownie.');
        console.log(err.response);
      }
      finally {
        console.log('test');
      }
    }
    const data = {
      email: dataLogin.email,
      password: dataLogin.password,
    }
    sendAcc(data)
    console.log(dataLogin.email, dataLogin.password);
  }

  return (
    <div className={classes.container} >
      <div>
        <img src={logo} alt='logo' className={classes.img}/>
      </div>
      <ul className={classes.errors}>
        {errors.map(el => <li key={el}>{el}</li>)}
      </ul>
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
            onChange={(e) => 
                setDataLogin((prevState) => 
                    ({...prevState, ['password']: e.target.value}))}/>
        <label className={classes.label}>Password</label>
          <input 
            className={classes.input} 
            type="password" 
            value={dataLogin.repeatPassword} 
            onChange={(e) => 
                setDataLogin((prevState) => 
                    ({...prevState, ['repeatPassword']: e.target.value}))}/>
          <button className={classes.button}>
          UTWÓRZ
          </button>
      </form>
    </div>
  )
}