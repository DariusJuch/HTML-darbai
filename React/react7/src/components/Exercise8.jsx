import React, { useState } from 'react';


const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; 
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Hello</h2>
        <p>This is a modal. Click the button to close.</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};

const AppModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default AppModal;