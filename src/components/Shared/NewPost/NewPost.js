import React from 'react';
import './NewPost.scss'
import { Input, Button, Table } from 'components/Base';

const NewPost = () => {
  return (
    <div className='new-post'>
      <Table />
      <div className='post-container'>
        <Input 
          label='제목 (필수)' 
          placeholder='제목을 입력하세요'
        />
        <Input 
          label='한줄 설명'
        />
        <Button>완성하기</Button>
      </div>
    </div>
  );
};

export default NewPost;