import React from 'react';

import MenuItem from './menuItem/menuItem';

interface IProps {
  isOpen: boolean;
  handleOpen: (open: boolean) => void;
}

const Menu: React.FC<IProps> = ({ handleOpen, isOpen }) => {
  const navItem = [
    { href: '/', text: 'Pizza' },
    { href: '/desserts', text: 'Desserts' },
    { href: '/drinks', text: 'Drinks' },
  ];

  return (
    <div className="header__menu menu">
      <nav className={`menu__list ${isOpen ? 'active' : ''}`}>
        {navItem.map(({ href, text }) => (
          <MenuItem
            href={href}
            text={text}
            key={href}
            handleOpen={handleOpen}
          />
        ))}
      </nav>
      <button
        onClick={() => handleOpen(!isOpen)}
        className={`menu__icon icon-menu ${isOpen ? 'active' : ''}`}
      >
        <span></span>
      </button>
    </div>
  );
};

export default Menu;
