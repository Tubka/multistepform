import classes from './AdminPanel.module.css';
import React, { useEffect, useState } from 'react';
import { IForm } from '../../models/Form.models';
import { DisplayForm } from '../DisplayForm/DisplayForm';

interface IProps {
  form: IForm | null;
  setIdForm: (id: string | null) => void 
}

export const AdminPanel = ({form, setIdForm}: IProps): JSX.Element => {
  const handleEdit = (e: React.MouseEvent, id: string | number) => {
    e.preventDefault()
  }

  const handleNewStep = () => {
  }

  const handleDeleteElement = (id: string | number) => {
  }

  return (
    <div>
      <h1 className={classes.header}>CREATOR</h1>
      <ul className={classes.forms}>
        <DisplayForm form={form} setIdForm={setIdForm}/>
      </ul>
    </div>
  );
};