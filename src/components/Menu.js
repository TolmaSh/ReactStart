import React from 'react';


import style from '../App.css';
import { NavLink } from 'react-router-dom';


function menu() {
  
  return (
    <div className="menu">
          
            <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/home' activeClassName={style.activeName}>
                    Home
                </NavLink>
            </div>
            <div  className={style.item}>
                <NavLink to='/about' activeClassName={style.activeName}>
                About
                </NavLink>
            </div>
            <div  className={style.item}>
                <NavLink to='/users' activeClassName={style.activeName}>
                    Users
                </NavLink>
            </div>
            <div  className={style.item}>
                <NavLink to='/Starwars' activeClassName={style.activeName}>
                Starwars
                </NavLink>
            </div>
           
        </nav>
     </div>
  );
}

export default menu;
