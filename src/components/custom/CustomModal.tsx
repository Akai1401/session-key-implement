import { Modal, ModalProps } from 'antd';
import React, { useEffect } from 'react';

interface ICustomModal extends ModalProps {}

const CustomModal = ({
  children,
  centered = true,
  closable = false,
  destroyOnClose = true,
  className = '',
  getContainer = false,
  ...props
}: ICustomModal) => {
  return (
    <Modal
      footer={null}
      centered={centered}
      closable={closable}
      destroyOnClose={destroyOnClose}
      className={`custom-modal ${className}`}
      getContainer={getContainer}
      {...props}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
