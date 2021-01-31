import React from 'react';

import classes from './NavBar.module.css';

function NavBar() {
  return (
    <React.Fragment>
      <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
          <a>Профиль</a>
        </div>
        <div className={classes.item}>
          <a>Сообщение</a>
        </div>
        <div className={classes.item}>
          <a>Новости</a>
        </div>
        <div className={classes.item}>
          <a>Музыка</a>
        </div>
        <div className={classes.item}>
          <a>Настройки</a>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
