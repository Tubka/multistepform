import { IForm } from '../../models/Form.models';
import { ChooseElement } from '../AdminPanel/ChooseElement/ChooseElement';
import classes from '../AdminPanel/AdminPanel.module.css';
import styles from './DisplayForm.module.css'
import { HandlerForms } from '../../pages/Admin/Helpers';
import { useEffect, useState } from 'react';
import { Control } from './Control'
interface IProps {
  form: IForm | null;
  setIdForm: (id: string | null) => void;
}

export const DisplayForm = ({form, setIdForm}: IProps): JSX.Element => {
  const [element, setElement] = useState<string>('input')
  const [optionToSelect, setOptionToSelect] = useState<string>('')
  const [arr, setArr] = useState<string[]>([])
  const [idStepToEdit, setIdStepToEdit] = useState<string>('')

  useEffect(() => {
    if(form) {
      HandlerForms.getSteps(form._id)
    }
  },[form])


  const handleNewStep = () => {
    if(form && form._id) {
      HandlerForms.newStep(form._id)
    }
  }

  const handleDeleteForm = () => {
    if(!window.confirm('Na pewno chcesz usunąć formularz?')) return
    if(form) {
      HandlerForms.deleteForm(form._id)
      setIdForm(null)
    }
  }

  const handleEdit = (e:any, id: any) => {
    console.log(e, id)
  }
  const handleDeleteElement = (id: any) => {
      console.log('delete element id: ', id) 
  }
  const handleNewElement = (id: any) => {
    const data = {
      element: {
        element: element,
        label: 'asd'
      },
      position: 0,
    }
    console.log(data)
  }

  const handleNewOption = () => {
    setArr(prev => [...prev, optionToSelect])
    setOptionToSelect('')
  }

  const handleIdStepToEdit = (id: string) => {
    setIdStepToEdit(id)
  }

  if(form && form._id) {
    return (
      <>
        {Object.values(form.steps).map((step) => {
          console.log(form)
          return (
            <li className={classes.container} key={step._id}>
    
              {step.elements?.map((el, index) => {
                  return (
                    <div key={index} className={classes.flex}>
                      <div>
                        <label className={classes.question}>{el.label}</label>
                        <div>
                          <ChooseElement element={el}/>
                        </div>
                      </div>
                      <button onClick={(e) => handleEdit(e, el._id)}>ED</button>
                      <button onClick={() => handleDeleteElement(el._id)}>DELETE</button>
                    </div>
                  )
              })}
                {step._id === idStepToEdit ? <Control step={step}/>:
                <button onClick={() => handleIdStepToEdit(step._id)}>OPEN EDITOR THIS STEP</button>}
            </li>
          )
        })}
        <button onClick={handleNewStep} className={classes.button}> NEW STEP</button>
        <button onClick={handleDeleteForm} className={classes.button}>DELETE THIS FORM</button>
      </>
    )
  }
  return <><h1>Wybierz z menu formularz który chcesz edytować</h1></>
  // return (
  //   {form?.steps?.map((step, index) => {
  //     return (
  //       <li className={classes.container} key={index}>

  //         {step.elements?.map((el) => {
  //             return (
  //               <div key={el.id} className={classes.flex}>
  //                 <div>
  //                   <label className={classes.question}>{el.label}</label>
  //                   <div>
  //                     <ChooseElement element={el}/>
  //                   </div>
  //                 </div>
  //                 <button onClick={(e) => handleEdit(e, el.id)}>ED</button>
  //                 <button onClick={() => handleDeleteElement(el.id)}>DELETE</button>
  //               </div>
  //             )
  //         })}
  //         <button className={classes.button} onClick={() => handleNewElement(step.id)}>ADD ELEMENT</button>
  //       </li>
  //     )
  //   })}
  // )
}