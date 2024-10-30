import { Button, ButtonProps } from 'antd';
import React from 'react';

interface ICustomButtonProps extends ButtonProps {}

const CustomButton = ({
  size = 'large',
  children,
  className,
  ...props
}: ICustomButtonProps) => {
  return (
    <Button className={'custom-btn ' + className} size={size} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
