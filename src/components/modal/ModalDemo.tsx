import React from 'react';
import CustomModal from '../custom/CustomModal';

const ModalActiveSuccess = ({ open, onCancel, data }: any) => {
  return (
    <CustomModal open={open} onCancel={onCancel} width={568}>
      <div className='bg-[#F6E4B1] p-[40px] rounded-xl'>Hi</div>
    </CustomModal>
  );
};

export default ModalActiveSuccess;
