import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../components/header/img/logo.png';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__title">404</div>
        <div className="not-found__subtitle">Page Not Found</div>
        <Link className="not-found__btn" to="/">
          Go Home
        </Link>
      </div>
      <div className="not-found__logo">
        <img width="38" src={LogoImg} alt="Pizza-Logo" />
        <div className="header__logo-text">
          <h1>Quattro Pizza</h1>
          <p>fastest delivery in town</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
