import React from 'react';
import './BingoWrapper.scss'
import { BingoChoice, BingoContent, BingoResult } from 'components/Bingo'

const BingoWrapper = ({
  bingo, oneBingo, twoBingo, threeBingo, bingoIndex, onYesClick, onNoClick, bingoCount
}) => {
  return (
    <>
      {/* <div className='ads'>광고</div> */}
      <div className='bingo-wrapper'>
        {bingoIndex < 25 ? (
          <BingoChoice onClick={onYesClick}>예</BingoChoice>
        ) : (
          <BingoChoice onClick={() => window.location.reload()}>한번 더 하기</BingoChoice>
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
          <BingoChoice onClick={() => window.location.href = '/'}>홈으로 가기</BingoChoice>
        )}
      </div>
      {/* <div className='ads'>광고</div> */}
    </>
  );
};

export default BingoWrapper;