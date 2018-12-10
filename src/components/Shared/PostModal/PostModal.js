import React from 'react';
import './PostModal.scss'
import Modal from 'react-modal'
import { Button } from 'components/Base';

const style = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const PostModal = ({isOpen, onRequestClose, onRemovePost}) => {
  return (
    <Modal
      style={style}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>정말 삭제하시겠습니까?</h2>
      <h4>삭제하면 다시 복구할 수 없습니다</h4>
      <div>
        <Button red onClick={onRemovePost}>예</Button>
        <Button onClick={onRequestClose}>아니오</Button>
      </div>
    </Modal>
  );
};

export default PostModal;