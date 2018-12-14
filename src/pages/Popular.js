import React from 'react';
import { PageWrapper, SearchWrapper } from 'components/Layouts';
import PopularListContainer from 'containers/Shared/PopularListContainer';

const Popular = () => {
  return (
    <PageWrapper>
      <SearchWrapper/>
      <PopularListContainer/>
    </PageWrapper>
  );
};

export default Popular;