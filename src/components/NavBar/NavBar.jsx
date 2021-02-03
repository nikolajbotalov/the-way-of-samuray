import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBar.module.css';

function NavBar() {
  return (
    <React.Fragment>
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>
            Профиль
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs" activeClassName={classes.active}>
            Сообщение
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/feeds" activeClassName={classes.active}>
            Новости
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" activeClassName={classes.active}>
            Музыка
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" activeClassName={classes.active}>
            Настройки
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
