import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import classes from './Navigation.module.css';
import { IoArrowBack } from "react-icons/io5";
import { HandlerForms } from '../../pages/Admin/Helpers';
import { useSelector } from 'react-redux';
import { ListForms } from '../Forms/ListForms';
import { IForm } from '../../models/Form.models';
import { RootState } from '../../store/models/rootstate.model';
import { useLoading } from '../../helpers/Hooks/fireFunctionWithLoad';
import { Loading } from '../Loading/Loading';

export class GetSelectors {
  static form = (state: RootState) => state.form 
}

interface IntForm {
  [key: string]: IForm
}

interface IProps {
  forms: IntForm | null;
  setIdForm: (id: string | null) => void;
}

export const Navigation = ({forms, setIdForm} : IProps): JSX.Element => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [nameForm, setNameForm] = useState<string>('');

  const { loading, fireLoading } = useLoading();

  const handleSetIdForm = (id: string | null) => {
    setIdForm(id)
    setIsShow(false)
  }

  const handleSendNewForm = (e: SyntheticEvent) => {
    e.preventDefault();
    if(nameForm.length < 4) {
      alert('Wprowadź nazwe formularza, minimum 4 znaki');
      return;
    }
    fireLoading(() => HandlerForms.newForm(nameForm));
    setNameForm('');
  }

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <div className={`${classes.container} ${isShow ? classes.showMenu : ''}`}>
        <IoArrowBack className={`${classes.iconBack}`} onClick={() => setIsShow(false)}/>
        <div>
          <h2 className={classes.menuHeader}>MENU</h2>
          <button className={classes.btn}>OPEN CREATOR</button>
        </div>
        <div>
          <h2 className={classes.header}>MY FORMS</h2>
          {!loading ? <ListForms forms={forms} onclick={handleSetIdForm}/> : <Loading small contrast/>}
          <form onSubmit={handleSendNewForm}>
            <input type="text/submit" className={classes.nameNewForm} placeholder="Name Form" value={nameForm} onChange={(e) => setNameForm(e.target.value)}/>
            <button type="submit" className={classes.btn} onClick={handleSendNewForm}>New Form</button>
          </form>
        </div>
        <div className={classes.accountContainer}>
          <h2 className={classes.header}>ACCOUNT</h2>
          <button className={`${classes.btn} ${classes.accountBtn}`}>SETTINGS</button>
          <button className={`${classes.btn} ${classes.accountBtn}`} onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
      <button className={`${classes.menuBtn} ${isShow ? classes.menuBtnHidden : ''}`} onClick={() => setIsShow(true)}>MENU</button>
    </>
  )
}