import React from 'react';
import './Content.scss'
import Wrapper from '../Wrapper';

const Content = ({title, children}) => {
  return (
    <Wrapper>
      <div className='title'>{title}</div>
      {children}
    </Wrapper>
  );
};

export default Content;