import React from 'react';
import './UserModal.scss'
import Modal from 'react-modal'
import { Button, Input, Error } from 'components/Base';

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

const UserModal = ({
  isOpen, 
  onRequestClose, 
  password, 
  onChange, 
  error,
  onLeave,
  onKeyPress
}) => {
  return (
    <Modal
      style={style}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>정말 탈퇴하시겠습니까?</h2>
      <h4>탈퇴하면 다시 복구할 수 없습니다</h4>
      <div>
        <Input 
          placeholder='다시 한 번 입력해 주세요'
          type='password'
          onChange={onChange}
          value={password}
          autoFocus
          onKeyPress={onKeyPress}
        />
        {error && <Error>{error}</Error>}
        <Button red onClick={onLeave}>예</Button>
        <Button onClick={onRequestClose}>아니오</Button>
      </div>
    </Modal>
  );
};

export default UserModal;