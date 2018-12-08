import React from 'react';
import './BingoGoHome.scss'

const BingoGoHome = ({children}) => {
  return (
    <div className='bingo-go-home' onClick={() => window.location.href = '/'}>
      {children}
    </div>
  );
};

export default BingoGoHome;