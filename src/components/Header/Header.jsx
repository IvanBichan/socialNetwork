import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png' alt={'logo'}/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }

            </div>
        </header>
    );
}