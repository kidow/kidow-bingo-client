import React from 'react';
import './BingoWrapper.scss'
import { BingoChoice, BingoContent } from 'components/Bingo'

const BingoWrapper = () => {
  return (
    <div className='bingo-wrapper'>
      <BingoChoice>예</BingoChoice>
      <BingoContent />
      <BingoChoice>아니오</BingoChoice>
    </div>
  );
};

export default BingoWrapper;