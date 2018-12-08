import React from 'react';
import './AdItem.scss'

const AdItem = ({left, children}) => {
  return (
    <div className={left ? 'left' : 'right'}>
      {children}
    </div>
  );
};

export default AdItem;