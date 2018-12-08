import React from 'react';
import './BingoChoice.scss'

const BingoChoice = ({children, ...rest}) => {
  return (
    <div className='bingo-choice' {...rest}>
      {children}
    </div>
  );
};

export default BingoChoice;