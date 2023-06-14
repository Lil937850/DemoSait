import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://i.pinimg.com/originals/18/07/e0/1807e0e5111a9f4835f6997cf93827c2.png' />

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div> :
        <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header