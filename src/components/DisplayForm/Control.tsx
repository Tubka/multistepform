import React, { SyntheticEvent, useState } from 'react';
import styles from './DisplayForm.module.css'
import classes from '../AdminPanel/AdminPanel.module.css';
import { IStep } from '../../models/Form.models';

interface IProps {
  step: IStep
}

export const Control = ({step}: IProps): JSX.Element => {
  const [element, setElement] = useState<string>('')
  const [listOption, setListOption] = useState<string[]>([]);
  const [actualValueOption, setActualValueOption] = useState<string>('');

  const handleNewOption = (e: SyntheticEvent) => {
    e.preventDefault()
    setListOption(prev => [...prev, actualValueOption]);
    setActualValueOption('');

  }

  const handleNewElement = (id: string) => {

  }

    return (
      <div className={styles.conatinerCreator}>
        <select className={styles.select} value={element} onChange={(e) => setElement(e.target.value)}>
          <option value='input'>Input</option>
          <option value='select'>Select</option>
        </select>
        {element === 'select' &&
        <div className={styles.listOption}>
          {listOption.length? 
            <ul>
              {listOption.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
            :
            null
          }
          <form className={styles.formToAdd} onSubmit={(e) => handleNewOption(e)}>
            <input  type="text/submit" value={actualValueOption} onChange={(e) => setActualValueOption(e.target.value)}/>
            <button type="submit">ADD OPTION</button>
          </form>
        </div>}
        <button className={classes.button} onClick={() => handleNewElement(step._id)}>ADD ELEMENT</button>
      </div>
    )
}