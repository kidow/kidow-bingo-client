import React from 'react';
import './BingoContent.scss'

const BingoContent = ({bingo, bingoIndex}) => {
  // const cells = Object.values(Object.assign({}, bingo))
  const temp = Object.entries(Object.assign({}, bingo))
  // console.log(temp)
  const cellList = temp.map((item, index) => {
    // console.log(item[0], item[1])
    return <div key={index} className={bingoIndex === index ? 'bingo-content' : 'none'}>{item[1]}</div>
  })
  return cellList
};

export default BingoContent;