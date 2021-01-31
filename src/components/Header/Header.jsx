import React from 'react';

import classes from './Header.module.css';

import Logo from './../../images/logo.png';

function Header() {
  return (
    <div className={classes.header}>
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default Header;
