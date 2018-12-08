import React from 'react';
import './BingoResult.scss'
import BingoTable from '../BingoTable';

const BingoResult = ({oneBingo, twoBingo, threeBingo, bingoCount}) => {
  return (
    <div className='bingo-result'>
      <BingoTable />
      {bingoCount === 1 ? <div className='bingo-ment'>1 Bingo!<br/> {oneBingo}</div> : null}
      {bingoCount === 2 ? <div className='bingo-ment'>2 Bingo!<br /> {twoBingo}</div> : null}
      {bingoCount >= 3 ? <div className='bingo-ment'>{bingoCount} Bingo!<br /> {threeBingo}</div> : null}
    </div>
  );
};

export default BingoResult;