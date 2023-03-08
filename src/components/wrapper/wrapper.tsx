import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/header';

const Wrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div className="wrapper">
      <div className="content">
        <Header handleOpen={handleOpen} isOpen={isOpen} />
        {!isOpen && <Outlet />}
      </div>
    </div>
  );
};

export default Wrapper;
