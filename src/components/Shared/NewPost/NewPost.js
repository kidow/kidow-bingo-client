import React from 'react';
import './NewPost.scss'
import { Input, Button, Table, Error } from 'components/Base';

const NewPost = ({
  cell11, cell12, cell13, cell14, cell15,
  cell21, cell22, cell23, cell24, cell25,
  cell31, cell32, cell33, cell34, cell35,
  cell41, cell42, cell43, cell44, cell45,
  cell51, cell52, cell53, cell54, cell55,
  logged, title, description, oneBingo, twoBingo, threeBingo, onChange, error, onClick, onBingoChange
}) => {
  return (
    <div className='new-post'>
      <Table 
        cell11={cell11}
        cell12={cell12}
        cell13={cell13}
        cell14={cell14}
        cell15={cell15}
        cell21={cell21}
        cell22={cell22}
        cell23={cell23}
        cell24={cell24}
        cell25={cell25}
        cell31={cell31}
        cell32={cell32}
        cell33={cell33}
        cell34={cell34}
        cell35={cell35}
        cell41={cell41}
        cell42={cell42}
        cell43={cell43}
        cell44={cell44}
        cell45={cell45}
        cell51={cell51}
        cell52={cell52}
        cell53={cell53}
        cell54={cell54}
        cell55={cell55}
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