import logo from '../../../public/logo.svg'
import userDefault from '../../../public/userDefaultPhoto.svg'
import style from './header.module.css'
import styleApp from '../../app.module.css'
import {Link, useLocation} from "react-router-dom";
import {HISTORY_ROUTE, HOME_ROUTE} from "../../routing/consts.js";
import {useEffect, useState} from "react";

const Header = () => {

  const url = useLocation().pathname;

  return (
    <header className={style.header}>
      <div className={style.container}>
        <img alt='TBank logo' src={logo}/>

        <Link to={HOME_ROUTE}>
          <p className={
            url === HOME_ROUTE ?
              `${styleApp.textNormal}` :
              `${styleApp.textBlur}`
          }>Т-кэшбек</p>
        </Link>

        <Link to={HISTORY_ROUTE}>
          <p className={
            url === HISTORY_ROUTE ?
              `${styleApp.textNormal}` :
              `${styleApp.textBlur}`
          }>Управление подсчетами</p>
        </Link>
      </div>

      <div className={style.container}>
        <p style={{
          fontSize: '1rem',
        }}
           className={styleApp.textBlur}
        >Ирина</p>

        <img alt='User photo' src={userDefault}/>
      </div>
    </header>
  );
};

export default Header;