import { Upload, UploadProps } from 'antd';
import React from 'react';

interface IUploadProps extends UploadProps {}

const CustomUpload = ({ children, ...props }: IUploadProps) => {
  return <Upload {...props}>{children}</Upload>;
};

export default CustomUpload;
