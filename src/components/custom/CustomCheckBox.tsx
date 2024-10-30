import { Checkbox, CheckboxProps, ConfigProvider } from 'antd';
import React from 'react';

interface ICheckBoxProps extends CheckboxProps {}

const CustomCheckBox = ({ children, className, ...props }: ICheckBoxProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0FAE62',
        },
      }}
    >
      {' '}
      <Checkbox {...props} className={'checkbox-custom ' + className}>
        {children}
      </Checkbox>
    </ConfigProvider>
  );
};

export default CustomCheckBox;
