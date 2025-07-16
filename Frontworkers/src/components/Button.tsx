import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const base = 'px-5 py-2 rounded font-semibold transition-colors focus:outline-none';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
};

export default Button;
