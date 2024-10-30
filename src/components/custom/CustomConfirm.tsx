import { Popconfirm, PopconfirmProps } from 'antd';
import React from 'react';

interface ICustomConfirmProps extends PopconfirmProps {}

const CustomConfirm = ({ children, ...props }: ICustomConfirmProps) => {
  return <Popconfirm {...props}>{children}</Popconfirm>;
};

export default CustomConfirm;
