import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AdminPanel } from '../../components/AdminPanel/AdminPanel';
import { GetSelectors, Navigation } from '../../components/Navigation/Navigation';
import { IForm } from '../../models/Form.models';
import { HandlerForms } from './Helpers';

export const Admin = () => {
  const { forms } = useSelector(GetSelectors.form);

  const [form, setForm] = useState<IForm | null>(null);
  const [idForm, setIdForm] = useState<string | null>(null);
  const [listForms, setListforms] = useState<IForm[]>([]);

  useEffect(() => {
      HandlerForms.getForm();
  },[]);

  useEffect(() => {
    if(!forms || !idForm) {
      setForm(null);
      return;
    };

    if(forms) {
      setForm(forms[idForm]);
    };
  },[idForm]);

  return (
    <>
      <Navigation forms={forms} setIdForm={setIdForm}/>
      <AdminPanel form={form} setIdForm={setIdForm}/>
    </>
  )
}