import React, { SyntheticEvent, useState } from 'react';
import classes from '../AdminPanel.module.css';
import { IStep } from '../../../models/Form.models';
import { Requests } from '../../../helpers/Requests';
import { HandlerForms } from '../../../pages/Admin/Helpers';
import { Loading } from '../../Loading/Loading';
import { FormTypes } from '../../../helpers/Contans.enum';
import { useLoading } from '../../../helpers/Hooks/fireFunctionWithLoad';

interface IProps {
  idStep?: string;
  idForm: string;
  step: IStep;
}

export const StepPanel = ({step, idForm}: IProps): JSX.Element => {
  const [element, setElement] = useState<string>(FormTypes.Input);
  const [listOption, setListOption] = useState<string[]>([]);
  const [actualValueOption, setActualValueOption] = useState<string>('');
  const [ask, setAsk] = useState<string>('');
  const { loading, fireLoading } = useLoading();

  const handleNewOption = (e: SyntheticEvent) => {
    e.preventDefault();
    setListOption(prev => [...prev, actualValueOption]);
    setActualValueOption('');
  }

  const handleDeleteStep = async (idForm: string, idStep: string) => {
    fireLoading(() => HandlerForms.deleteStep(idForm, idStep));
  };

  const handleNewElement = async (idForm: string, idStep: string) => {
    const data = {
      element: {
        element: element === FormTypes.Checkbox ? FormTypes.Input : element,
        label: element === FormTypes.Input ? '' : ask,
        options: listOption,
        properties: {
          placeholder: ask,
          type: element === FormTypes.Checkbox ? FormTypes.Checkbox : 'text',
        },
        styles: {
          width: element === FormTypes.Checkbox ? '30px' : '70%',
          height: element === FormTypes.Checkbox ? '30px' : 'auto',
          backgroundColor: '#fff',
          padding: '10px 12px',
          borderRadius: '6px',
          border: '2px solid #919191',
          fontSize: '20px',
          cursor: element === FormTypes.Checkbox ? 'pointer' : 'auto'
        }
      }
    }
    fireLoading(() => HandlerForms.newElement(idForm, idStep, data));
  }
  if(loading) return <Loading />
  return (
    <div className={classes.conatinerCreator}>
      <select className={classes.select} value={element} onChange={(e) => setElement(e.target.value)}>
        <option value={FormTypes.Input}>Input</option>
        <option value={FormTypes.Select}>Select</option>
        <option value={FormTypes.Checkbox}>Checkbox</option>
      </select>
      <label className={classes.steps}>
        Pytanie: 
        <input className={classes.testInput} type='text' value={ask} onChange={(e) => setAsk(e.target.value)}/>
      </label>
      {element === FormTypes.Select &&
      <div className={classes.listOption}>
        {listOption.length? 
          <ul>
            {listOption.map((el, index) => <li key={index}>{el}</li>)}
          </ul>
          :
          null
        }
        <form className={classes.formToAdd} onSubmit={(e) => handleNewOption(e)}>
          <input type='text/submit' value={actualValueOption} onChange={(e) => setActualValueOption(e.target.value)}/>
          <button type='submit'>ADD OPTION</button>
        </form>
      </div>}
      <button className={classes.button} onClick={() => handleNewElement(idForm, step._id)}>ADD ELEMENT</button>
      <button className={classes.button} onClick={() => handleDeleteStep(idForm, step._id)}>DELETE STEP</button>
    </div>
  )
}