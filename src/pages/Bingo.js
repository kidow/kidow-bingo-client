import React from 'react';
import BingoContainer from 'containers/Bingo/BingoContainer';

const Post = ({match}) => {
  const { id } = match.params
  return (
    <BingoContainer id={id}/>
  );
};

export default Post;