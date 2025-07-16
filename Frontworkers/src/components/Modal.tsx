import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 relative min-w-[300px]">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-blue-600">✕</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
