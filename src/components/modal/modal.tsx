import React, { useEffect } from 'react';

interface IProps {
  isOpen: boolean;
  title?: string;
  handleModal: () => void;
  children: any;
}

const Modal: React.FC<IProps> = ({ isOpen, title, handleModal, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modalOpen');
    } else {
      document.body.classList.remove('modalOpen');
    }
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      handleModal();
    }
  };

  return (
    <div
      className={`modal__wrapper ${isOpen ? 'open' : 'close'}`}
      onClick={event => handleBackdropClick(event)}
    >
      <div className="modal__body">
        <div className="modal__close" onClick={() => handleModal()}></div>
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
