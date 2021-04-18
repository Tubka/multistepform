import classes from './AdminPanel.module.css';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { IForm } from '../../models/Form.models';
import { OneStep } from './DisplayForm/OneStep';
import { useLoading } from '../../helpers/Hooks/fireFunctionWithLoad';
import { Loading } from '../Loading/Loading';
import { GetSelectors } from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { HandlerForms } from '../../pages/Admin/Helpers';

interface IProps {
  form?: IForm | null;
  idForm: string | null;
  setIdForm: (id: string | null) => void 
}


export const FormView = ({idForm, setIdForm}: IProps): JSX.Element => {

  const { forms } = useSelector(GetSelectors.form);
  const [positionNewStep, setPositionNewStep] = useState<number | null>(null);
  const [form, setForm] = useState<IForm | null>(null);
  const { loading, fireLoading } = useLoading() 

  useEffect(() => {
    if(forms && idForm) {
      const form = forms[idForm];
      setForm(form);
    };
  },[idForm, forms]);


  useEffect(() => {
    if(form) {
      fireLoading(() => HandlerForms.getSteps(form._id));
    };
  },[form]);


  const handleNewStep = (e: SyntheticEvent) => {
    e.preventDefault();
    if(form?._id) {
      fireLoading(() => HandlerForms.newStep(form._id, positionNewStep));
    };
  };

  const handleDeleteForm = () => {
    if(!window.confirm('Na pewno chcesz usunąć formularz?')) return;
    if(form) {
      fireLoading(() => HandlerForms.deleteForm(form._id));
      setIdForm(null);
    };
  };

  if(loading) return <Loading />
  if(form && idForm) {
    return (
      <ul className={classes.steps}>
        {Object.values(form.steps).map((step, index) => {
          return (
            <li key={index} className={classes.container} >
              <OneStep key={index} step={step} idForm={idForm}/>
            </li>
            )
        })}
        <form className={classes.formNewStep}>
          <label htmlFor="">Wprowadź pozycje na której ma być krok (puste = ostatnia pozycja)</label>
            <input className={classes.inputPosition} type='number' value={positionNewStep? positionNewStep : ''} onChange={(e) => setPositionNewStep(Number(e.target.value))}/>
          <button onClick={handleNewStep} className={classes.button}>NEW STEP</button>
        </form>
        <button onClick={handleDeleteForm} className={classes.button}>DELETE THIS FORM</button>
      </ul>
    )
  }
  return <><h1>Wybierz z menu formularz który chcesz edytować</h1></>
}