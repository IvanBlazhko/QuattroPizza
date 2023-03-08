import React from 'react';

import LogoImg from '../img/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="header__logo">
      <img width="38" src={LogoImg} alt="Pizza-Logo" />
      <div className="header__logo-text">
        <h1>Quattro Pizza</h1>
        <p>fastest delivery in town</p>
      </div>
    </div>
  );
};

export default Logo;
