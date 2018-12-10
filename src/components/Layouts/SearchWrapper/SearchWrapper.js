import React from 'react';
import './SearchWrapper.scss'
import SearchBarContainer from 'containers/Base/SearchBarContainer';
import NavBarContainer from 'containers/Base/NavBarContainer';

const SearchWrapper = ({username}) => {
  return (
    <div className='search-wrapper'>
      <NavBarContainer username={username}/>
      <SearchBarContainer username={username}/>
    </div>
  );
};

export default SearchWrapper;