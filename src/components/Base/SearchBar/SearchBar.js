import React from 'react';
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input placeholder='빙고 제목을 입력 후 엔터를 눌러주세요.' />
    </div>
  );
};

export default SearchBar;