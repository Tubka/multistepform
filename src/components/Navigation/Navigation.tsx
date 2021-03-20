import React from 'react';
import classes from './Navigation.module.css';
import { IoArrowBack } from "react-icons/io5";
export const Navigation = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <div>
        <h2 className={classes.menuHeader}>MENU</h2>
        <button className={classes.btn}>OPEN CREATOR</button>
      </div>
      <div>
        <h2 className={classes.header}>MY FORMS</h2>
        {`list`}
      </div>
      <div className={classes.accountContainer}>
        <h2 className={classes.header}>ACCOUNT</h2>
        <button className={`${classes.btn} ${classes.accountBtn}`}>SETTINGS</button>
        <button className={`${classes.btn} ${classes.accountBtn}`}>LOGGOUT</button>
      </div>
      <IoArrowBack className={classes.iconBack}/>
    </div>
  )
}