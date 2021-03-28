import classes from './AdminPanel.module.css';
import React, { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { ChooseElement } from './ChooseElement/ChooseElement';
import { IForm } from '../../models/Form.models';

export const AdminPanel = (): JSX.Element => {
  const [showPropertiesOfId, setShowPropertiesOfId] = useState<number>(-1)
  const [editId, setEditId] = useState<string | number>('') 
  const [form, setForm] = useState<IForm | null>(null);

  useEffect(() => { 
    setForm({
        id: 1,
        name: 'form1',
        steps: [
          {
            id: 11,
            elements: [
              {id: 111,
                element: 'input', 
                // type: 'text', 
                label: `what's your name?`,
                properties: {
                  type: 'text'
                },
              },
              {id: 112, 
                element: 'input', 
                // type: 'checkbox', 
                label: 'Question',
                properties: {
                    type: 'text'
                  },
              },
              {id: 113, 
                element: 'input', 
                // type: 'password', 
                label: 'empty',
                properties: {
                    type: 'text'
                  },
              }]
          },
          {
            id: 12,
            elements: [
              {id: 121, 
                element: 'select', 
                // type: 'text', 
                label: 'show', 
                options: ['a','b', 'c']},
                
              {id: 122, 
                element: 'input', 
                // type: 'checkbox', 
                label: 'Are you happy?',
                properties: {
                  type: 'checkbox'
                },
              },
              {id: 123, 
                element: 'input', 
                // type: 'password', 
                label: 'blah',
                properties: {
                  type: 'text'
                },
              }]
          }
        ]
      })
  },[])

  const handleEdit = (e: React.MouseEvent, id: string | number) => {
    e.preventDefault()
    setEditId(id)
  }
  const handleNewElement = (id: number | string) => {
    if(form) {
      const newSteps = form.steps.map(el => {

        if(el.id === id) {
          return {
            ...el,
            elements: [...el.elements, {id:155, label: '', element: ''}]
          }
        }

        return el
      })
      
      setForm((prev: IForm | null) => {

        if(!prev) return null

        return ({
          ...prev,
          steps: newSteps
        })

      })
    }
  }

  const handleNewStep = () => {
    const newStep = {id:123, elements: []}

    form && setForm((prev: IForm | null) => {

      if(!prev) {
        return null
      }

      return ({
        ...prev,
        ['steps']: [...prev.steps, newStep]
      })
    })
  }

  const handleDeleteElement = (id: string | number) => {
    console.log(id)
  }

  return (
    <div>
      <Navigation />
      <h1 className={classes.header}>CREATOR</h1>
      <ul className={classes.forms}>

        {form?.steps?.map((step, index) => {
          return (
            <li className={classes.container} key={index}>

              {step.elements?.map((el) => {
                  return (
                    <div key={el.id} className={classes.flex}>
                      <div>
                        <label className={classes.question}>{el.label}</label>
                        <div>
                          <ChooseElement element={el}/>
                        </div>
                      </div>
                      <button onClick={(e) => handleEdit(e, el.id)}>ED</button>
                      <button onClick={() => handleDeleteElement(el.id)}>DELETE</button>
                    </div>
                  )
              })}
              <button className={classes.button} onClick={() => handleNewElement(step.id)}>ADD ELEMENT</button>
            </li>
          )
        })}
        <button onClick={handleNewStep} className={classes.button}> NEW STEP</button>
      </ul>
    </div>
  );
};