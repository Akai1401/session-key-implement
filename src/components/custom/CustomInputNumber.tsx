import { InputNumber, InputNumberProps } from 'antd';
import React from 'react';

interface ICustomInputNumberProps extends InputNumberProps {}

const CustomInputNumber = ({
  size = 'large',
  ...props
}: ICustomInputNumberProps) => {
  return <InputNumber size={size} {...props} />;
};

export default CustomInputNumber;
