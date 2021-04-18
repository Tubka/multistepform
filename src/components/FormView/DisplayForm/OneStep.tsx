import { IForm, IStep } from '../../../models/Form.models';
import { ChooseElement } from '../ChooseElement/ChooseElement';
import classes from '../AdminPanel.module.css';
import { HandlerForms } from '../../../pages/Admin/Helpers';
import { SyntheticEvent, useEffect, useState } from 'react';
import { StepPanel } from './StepPanel'
import { GetSelectors } from '../../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { Loading } from '../../Loading/Loading';
import { useLoading } from '../../../helpers/Hooks/fireFunctionWithLoad';
interface IProps {
  form?: IForm | null;
  idForm?: string | null;
  step: IStep;
  setIdForm?: (id: string | null) => void;
}

export const OneStep = ({ idForm, setIdForm, step }: IProps): JSX.Element => {
  const [idStepToEdit, setIdStepToEdit] = useState<string>('');
  const { loading, fireLoading } = useLoading();

  const handleDeleteElement = async (idForm: string, idStep: string, idElement: string) => {
    if(!window.confirm('Na pewno chcesz usunąć element?')) {
      return;
    };
    await fireLoading(() => HandlerForms.deleteElement(idForm, idStep, idElement));
  }

  const handleIdStepToEdit = (id: string) => {
    setIdStepToEdit(id);
  }
  
  if(loading) return <Loading />
  if(step && idForm) {
    return (
        <>
          <form className={classes.form}>
            {step.elements?.map((el: any, index: any) => {
              return (
                <div key={el._id}>
                  <label className={classes.question}>{el.label}</label>
                    <ChooseElement element={el}/>
                  <div >
                    {/* <button onClick={(e) => handleEdit(e, el._id)}>EDIT</button> */}
                    <button type='button' className={classes.btnDelete} onClick={() => handleDeleteElement(idForm, step._id, el._id)}>DELETE</button>
                  </div>
                </div>
              )
            })}
          </form>
          {step._id === idStepToEdit ? <StepPanel step={step} idForm={idForm}/>:
          <button className={classes.btnDelete} onClick={() => handleIdStepToEdit(step._id)}>OPEN EDITOR THIS STEP</button>}
        </>
      ) 
    }
    return <></>
}