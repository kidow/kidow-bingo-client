import React from 'react';
import './BingoContent.scss'

const BingoContent = ({bingo, bingoIndex}) => {
  const temp = Object.entries(Object.assign({}, bingo))
  const cellList = temp.map((item, index) => {
    return <div key={index} className={bingoIndex === index ? 'bingo-content' : 'none'}>{item[1]}</div>
  })
  return cellList
};

export default BingoContent;