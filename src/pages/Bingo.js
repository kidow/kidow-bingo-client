import React from 'react';
import BingoContainer from 'containers/Bingo/BingoContainer';

const Bingo = ({match}) => {
  const { id } = match.params
  return (
    <BingoContainer id={id}/>
  );
};

export default Bingo;