import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const ItemLink = styled(NavLink)`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  transition: color 0.3s ease;
  @media (max-width: 767px) {
    font-size: 36px;
  }
  &.active {
    color: #fe5f1e;
  }
  &:hover {
    color: #fe5f1e;
  }
`;

interface IProps {
  href: string;
  text: string;
  handleOpen: (open: boolean) => void;
}

const MenuItem: React.FC<IProps> = ({ href, text, handleOpen }) => {
  return (
    <div>
      <ItemLink to={href} onClick={() => handleOpen(false)}>
        {text}
      </ItemLink>
    </div>
  );
};

export default MenuItem;
