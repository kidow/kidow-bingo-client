import React from 'react';
import './SearchWrapper.scss'
import SearchBarContainer from 'containers/Base/SearchBarContainer';
import NavBarContainer from 'containers/Base/NavBarContainer';

const SearchWrapper = () => {
  return (
    <div className='search-wrapper'>
      <NavBarContainer />
      <SearchBarContainer />
    </div>
  );
};

export default SearchWrapper;