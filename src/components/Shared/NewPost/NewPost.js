import React from 'react';
import './NewPost.scss'
import { Input, Button, Table } from 'components/Base';

const NewPost = ({logged}) => {
  return (
    <div className='new-post'>
      <Table />
      <div className='post-container'>
        <Input 
          label='제목 (필수)' 
          placeholder={logged ? '제목을 입력하세요' : '로그인이 필요합니다'}
          disabled={!logged}
        />
        <Input 
          label='한줄 설명'
          disabled={!logged}
        />
        <Button>완성하기</Button>
      </div>
    </div>
  );
};

export default NewPost;