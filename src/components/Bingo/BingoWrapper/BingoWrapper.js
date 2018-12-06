import React from 'react';
import './BingoWrapper.scss'
import { BingoChoice, BingoContent } from 'components/Bingo'

const BingoWrapper = ({
  cell_1_1, cell_1_2, cell_1_3, cell_1_4, cell_1_5,
  cell_2_1, cell_2_2, cell_2_3, cell_2_4, cell_2_5,
  cell_3_1, cell_3_2, cell_3_3, cell_3_4, cell_3_5,
  cell_4_1, cell_4_2, cell_4_3, cell_4_4, cell_4_5,
  cell_5_1, cell_5_2, cell_5_3, cell_5_4, cell_5_5,
  oneBingo, twoBingo, threeBingo
}) => {
  return (
    <div className='bingo-wrapper'>
      <BingoChoice>예</BingoChoice>
      <BingoContent />
      <BingoChoice>아니오</BingoChoice>
    </div>
  );
};

export default BingoWrapper;