import React from 'react';
import './BingoChoice.scss'

const BingoChoice = ({children}) => {
  return (
    <div className='bingo-choice'>
      {children}
    </div>
  );
};

export default BingoChoice;