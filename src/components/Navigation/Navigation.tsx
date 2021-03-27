import React, { useEffect, useRef, useState } from 'react';
import classes from './Navigation.module.css';
import { IoArrowBack } from "react-icons/io5";

export const Navigation = (): JSX.Element => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <>
        <div className={`${classes.container} ${isShow ? classes.showMenu : ''}`}>
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
            <button className={`${classes.btn} ${classes.accountBtn}`}>LOGOUT</button>
          </div>
          <IoArrowBack className={`${classes.iconBack}`} onClick={() => setIsShow(false)}/>
        </div>
      <button className={`${classes.menuBtn} ${isShow ? classes.menuBtnHidden : ''}`} onClick={() => setIsShow(true)}>MENU</button>
    </>
  )
}