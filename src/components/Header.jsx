import React from 'react';

import Logo from './../images/logo.png';

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default Header;
