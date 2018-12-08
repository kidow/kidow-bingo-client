import React from 'react';
import './Input.scss'

const Input = ({label, disabled, ...rest}) => {
  return (
    <div className='input-with-label'>
      <div className='label'>{label}</div>
      <input className={disabled ? 'disabled' : 'input'} autoComplete='off' {...rest}/>
    </div>
  );
};

export default Input;