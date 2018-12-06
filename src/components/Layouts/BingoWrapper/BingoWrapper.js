import React from 'react';
import './BingoWrapper.scss'

const BingoWrapper = ({children}) => {
  return (
    <div className='bingo-wrapper'>
      {children}
    </div>
  );
};

export default BingoWrapper;