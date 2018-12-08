import React from 'react';
import './BingoReload.scss'

const BingoReload = ({children}) => {
  return (
    <div className='bingo-reload' onClick={() => window.location.reload()}>
      {children}
    </div>
  );
};

export default BingoReload;