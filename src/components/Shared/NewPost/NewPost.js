import React from 'react';
import './NewPost.scss'
import { Input, Button, Table } from 'components/Base';

const NewPost = ({
  cell_1_1, cell_1_2, cell_1_3, cell_1_4, cell_1_5,
  cell_2_1, cell_2_2, cell_2_3, cell_2_4, cell_2_5,
  cell_3_1, cell_3_2, cell_3_3, cell_3_4, cell_3_5,
  cell_4_1, cell_4_2, cell_4_3, cell_4_4, cell_4_5,
  cell_5_1, cell_5_2, cell_5_3, cell_5_4, cell_5_5,
  logged, title, description, onChange
}) => {
  return (
    <div className='new-post'>
      <Table 
        cell_1_1={cell_1_1}
        cell_1_2={cell_1_2}
        cell_1_3={cell_1_3}
        cell_1_4={cell_1_4}
        cell_1_5={cell_1_5}
        cell_2_1={cell_2_1}
        cell_2_2={cell_2_2}
        cell_2_3={cell_2_3}
        cell_2_4={cell_2_4}
        cell_2_5={cell_2_5}
        cell_3_1={cell_3_1}
        cell_3_2={cell_3_2}
        cell_3_3={cell_3_3}
        cell_3_4={cell_3_4}
        cell_3_5={cell_3_5}
        cell_4_1={cell_4_1}
        cell_4_2={cell_4_2}
        cell_4_3={cell_4_3}
        cell_4_4={cell_4_4}
        cell_4_5={cell_4_5}
        cell_5_1={cell_5_1}
        cell_5_2={cell_5_2}
        cell_5_3={cell_5_3}
        cell_5_4={cell_5_4}
        cell_5_5={cell_5_5}
        onChange={onChange}
      />
      <div className='post-container'>
        <Input 
          label='제목 (필수)' 
          placeholder={logged ? '제목을 입력하세요' : '로그인이 필요합니다'}
          disabled={!logged}
          value={title}
          name='title'
          onChange={onChange}
        />
        <Input 
          label='한줄 설명'
          disabled={!logged}
          value={description}
          onChange={onChange}
          name='description'
        />
        <Button>완성하기</Button>
      </div>
    </div>
  );
};

export default NewPost;