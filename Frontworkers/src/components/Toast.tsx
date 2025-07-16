import React from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

const colors = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
};

const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => (
  <div className={`fixed bottom-6 right-6 px-4 py-2 rounded text-white shadow-lg z-50 ${colors[type]}`}>
    {message}
  </div>
);

export default Toast;
