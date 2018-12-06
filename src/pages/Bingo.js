import React from 'react';
import { BingoWrapper } from 'components/Layouts';
import BingoContainer from 'containers/Bingo/BingoContainer';

const Post = ({match}) => {
  const { id } = match.params
  return (
    <BingoWrapper>
      <BingoContainer id={id}/>
    </BingoWrapper>
  );
};

export default Post;