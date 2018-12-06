import React from 'react';
import './NewPost.scss'
import { Input, Button, Table, Error } from 'components/Base';

const NewPost = ({
  cell_1_1, cell_1_2, cell_1_3, cell_1_4, cell_1_5,
  cell_2_1, cell_2_2, cell_2_3, cell_2_4, cell_2_5,
  cell_3_1, cell_3_2, cell_3_3, cell_3_4, cell_3_5,
  cell_4_1, cell_4_2, cell_4_3, cell_4_4, cell_4_5,
  cell_5_1, cell_5_2, cell_5_3, cell_5_4, cell_5_5,
  logged, title, description, oneBingo, twoBingo, threeBingo, onChange, error, onClick, onBingoChange
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
        onBingoChange={onBingoChange}
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
        <Input
          label='원 빙고 멘트 (필수)'
          placeholder='원 빙고 시 보여줄 말을 입력하세요'
          value={oneBingo}
          name='oneBingo'
          onChange={onChange}
        />
        <Input
          label='투 빙고 멘트 (필수)'
          placeholder='투 빙고 시 보여줄 말을 입력하세요'
          value={twoBingo}
          name='twoBingo'
          onChange={onChange}
        />
        <Input
          label='쓰리 빙고 이상 멘트 (필수)'
          placeholder='쓰리 빙고 이상 시 보여줄 말을 입력하세요'
          value={threeBingo}
          name='threeBingo'
          onChange={onChange}
        />
        <Input type='file' name='파일'/>
        {error && <Error>{error}</Error>}
        <Button onClick={onClick}>완성하기</Button>
      </div>
    </div>
  );
};

export default NewPost;