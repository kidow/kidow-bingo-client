import React from 'react';
import './Button.scss'

const Button = ({children, onClick, red}) => {
  return (
    <div className={red ? 'red-button' : 'button'} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;