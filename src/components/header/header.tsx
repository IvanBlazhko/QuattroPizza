import React from 'react';

import Logo from './headerLogo/logo';
import Menu from './headerMenu/menu';
import Basket from '../basket/basket';

interface IProps {
  isOpen: boolean;
  handleOpen: (open: boolean) => void;
}

const Header: React.FC<IProps> = ({ handleOpen, isOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <Menu handleOpen={handleOpen} isOpen={isOpen} />
        <Basket />
      </div>
    </header>
  );
};

export default Header;
