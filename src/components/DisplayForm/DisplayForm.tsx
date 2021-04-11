import { IForm } from '../../models/Form.models';
import { ChooseElement } from '../AdminPanel/ChooseElement/ChooseElement';
import classes from '../AdminPanel/AdminPanel.module.css'
import { HandlerForms } from '../../pages/Admin/helper/Helpers';

interface IProps {
  form: IForm | null;
  setIdForm: (id: string | null) => void;
}

export const DisplayForm = ({form, setIdForm}: IProps): JSX.Element => {

  const handleNewStep = () => {
    if(form && form._id) {
      HandlerForms.newStep(form._id)
    }
  }

  const handleDeleteForm = () => {
    if(form) {
      HandlerForms.deleteForm(form._id)
      setIdForm(null)
    }
  }

  if(form && form._id) {
    return (
      <>
        {form?.steps?.map((step, index) => {
          return (
            <li className={classes.container} key={step.id}>
    
              {step.elements?.map((el) => {
                  return (
                    <div key={el.id} className={classes.flex}>
                      <div>
                        <label className={classes.question}>{el.label}</label>
                        <div>
                          <ChooseElement element={el}/>
                        </div>
                      </div>
                      {/* <button onClick={(e) => handleEdit(e, el.id)}>ED</button> */}
                      {/* <button onClick={() => handleDeleteElement(el.id)}>DELETE</button> */}
                    </div>
                  )
              })}
              {/* <button className={classes.button} onClick={() => handleNewElement(step.id)}>ADD ELEMENT</button> */}
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