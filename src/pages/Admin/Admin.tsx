import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FormView } from '../../components/FormView/FormView';
import { Loading } from '../../components/Loading/Loading';
import { GetSelectors, Navigation } from '../../components/Navigation/Navigation';
import { HandlerForms } from './Helpers';

export const Admin = () => {
  const { forms } = useSelector(GetSelectors.form);
  const [loading, setLoading] = useState<boolean>(true)
  const [idForm, setIdForm] = useState<string | null>(null);

  const getForm = async () => {
    setLoading(true);
    await HandlerForms.getForm();
    setLoading(false)
  }

  useEffect(() => {
    getForm();
  },[]);


  if(loading) return <Loading />
  return (
    <>
      <Navigation forms={forms} setIdForm={setIdForm}/>
      <FormView idForm={idForm} setIdForm={setIdForm}/>
    </>
  )
}