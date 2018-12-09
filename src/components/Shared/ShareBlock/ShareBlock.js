import React from 'react';
import './ShareBlock.scss'
import { IoIosCopy } from 'react-icons/io'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ShareBlock = ({_id}) => {
  return (
    <div className='share-block'>
      <div className='share'>
        <CopyToClipboard text={`${window.location.href}post/${_id}`}>
          <IoIosCopy className='svg' />
        </CopyToClipboard>
        <input 
          disabled
          value={`${window.location.href}post/${_id}`}
        />
      </div>
    </div>
  );
};

export default ShareBlock;