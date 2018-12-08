import React from 'react';
import './BingoWrapper.scss'
import { BingoChoice, BingoContent, BingoResult, BingoReload } from 'components/Bingo'
import BingoGoHome from '../BingoGoHome';

const BingoWrapper = ({
  bingo, oneBingo, twoBingo, threeBingo, bingoIndex, onYesClick, onNoClick, bingoCount
}) => {
  return (
    <div className='bingo-wrapper'>
      {bingoIndex < 25 ? (
        <BingoChoice onClick={onYesClick}>예</BingoChoice>
      ) : (
        <BingoReload>한번 더 하기</BingoReload>
      )}
      {bingoIndex < 25 ? (
        <BingoContent bingo={bingo} bingoIndex={bingoIndex}/>
      ) : (
        <BingoResult 
          oneBingo={oneBingo}
          twoBingo={twoBingo}
          threeBingo={threeBingo}
          bingoCount={bingoCount}
        />
      )}
      {bingoIndex < 25 ? (
        <BingoChoice onClick={onNoClick}>아니오</BingoChoice>
      ) : (
        <BingoGoHome>홈으로 가기</BingoGoHome>
      )}
    </div>
  );
};

export default BingoWrapper;