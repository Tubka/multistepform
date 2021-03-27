import classes from './AdminPanel.module.css';
import React, { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { ChooseElement } from './ChooseElement/ChooseElement';

// interface IProperties {
//   [key: string]: string;
// }

// interface IStyle {
//   [key: string]: string
// }

// interface IElement {
//   id: string;
//   element: string;
//   description?: string;
//   options?: string[];
//   text?: string;
//   properties?: IProperties;
//   style?: IStyle;
// }

// interface IForms {
//   name: string;
//   steps: Array<IElement[]>;
//   style?: IStyle;
// }


interface IProperties {
  [key: string]: string;
}

interface IStyle {
  [key: string]: string
}

interface IElement {
  id: string | number;
  label: string;
  element: string;
  type?: string;
  description?: string;
  options?: string[];
  properties?: IProperties;
  style?: IStyle;
}

interface IStep {
  id: string | number;
  elements: IElement[];
}

interface IForm {
  id: string | number;
  name: string;
  steps: IStep[];
  style?: IStyle;
}

export const AdminPanel = (): JSX.Element => {
  const [showPropertiesOfId, setShowPropertiesOfId] = useState<number>(-1)
  const [editId, setEditId] = useState<string | number>('') 



  const form: IForm = {
    id: 1,
    name: 'form1',
    steps: [
      {
        id: 11,
        elements: [
          {id: 111,
            element: 'input', 
            type: 'text', 
            label: `what's your name?`},
          {id: 112, 
            element: 'input', 
            type: 'checkbox', 
            label: 'Question'},
          {id: 113, 
            element: 'input', 
            type: 'password', 
            label: 'empty'}]
      },
      {
        id: 12,
        elements: [
          {id: 121, 
            element: 'select', 
            type: 'text', 
            label: 'show', 
            options: ['a','b', 'c']},
          {id: 122, 
            element: 'input', 
            type: 'checkbox', 
            label: 'Are you happy?'},
          {id: 123, 
            element: 'input', 
            type: 'password', 
            label: 'blah'}]
      }
    ]
  }


  const handleEdit = (e: React.MouseEvent, id: string | number) => {
    e.preventDefault()
    setEditId(id)
    console.log(id)
  }
  const handleNewElement = (id: number | string) => {
    console.log(id)
  }


  return (
    <div>
      <Navigation />
      <h1 className={classes.header}>CREATOR</h1>
      <ul className={classes.forms}>

        {form.steps.map((step, index) => {
          return (
            <li className={classes.container} key={index}>

              {step.elements.map((el) => {
                  return (
                    <div className={classes.flex}>
                      <div>
                        <p className={classes.question}>{el.label}</p>
                        <div>
                          <ChooseElement element={el}/>
                        </div>
                      </div>
                      <button onClick={(e) => handleEdit(e, el.id)}>ED</button>
                    </div>
                  )
              })}
              <button className={classes.button} onClick={() => handleNewElement(step.id)}>ADD ELEMENT</button>
            </li>
          )
        })}
        <button className={classes.button}> NEW STEP</button>



        {/* {form.steps.elements.map((step, index: number) => {
          <li className= {classes.oneLi} key={index}>
            <button>asdasdasd</button>
              <form >

                {step.elements.map(step => {
                  const CustomTag = step.element as keyof JSX.IntrinsicElements;
                  return CustomTag === 'input' ? 
                    <>
                    {console.log('wchodzi do środka')}
                      <h1>asasd</h1>
                      <label>
                        {step.description}
                        <CustomTag/>
                        <button onClick={(e) => handleEdit(e, step.id, index)}>EDIT</button>
                      </label>
                    </> : 
                    <div style={{margin: '10px 0', display: 'flex'}}>
                      {CustomTag === 'select' && <span style={{marginRight: '10px'}}>+</span>}
                      <CustomTag style={{width: '100px'}}>
                        {CustomTag === 'select' && step.options?.map(oneOption => <option>{oneOption}</option>)}
                        {step.description}
                      </CustomTag>
                      <button onClick={(e) => handleEdit(e, step.id, index)}>EDIT</button>
                     </div>
                })}
              </form>
          </li>
        })} */}

      </ul>
    </div>
  );
};