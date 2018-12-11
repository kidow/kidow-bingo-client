import React from 'react';
import './NewPost.scss'
import { Input, Button, Table, Error } from 'components/Base';

const NewPost = ({
  logged, title, description, oneBingo, twoBingo, 
  threeBingo, onChange, error, onClick, onBingoChange,
  onUploadClick, bingo
}) => {
  return (
    <div className='new-post'>
      <Table
        onBingoChange={onBingoChange}
        bingo={bingo}
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
        <Button onClick={onUploadClick}>메인 이미지 업로드</Button>
        {error && <Error>{error}</Error>}
        <Button onClick={onClick}>완성하기</Button>
      </div>
    </div>
  );
};

export default NewPost;