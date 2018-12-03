import React from 'react';
import './SwitchLink.scss'
import { Link } from 'react-router-dom'

const SwitchLink = ({to, children}) => {
  return (
    <div className='switch-link'>
      <Link className='link' to={to}>{children}</Link>
    </div>
  );
};

export default SwitchLink;