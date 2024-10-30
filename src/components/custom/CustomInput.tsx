import { Input, InputProps } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import React from 'react';

interface ICustomInputProps extends InputProps {}
interface ICustomTextAreaProps extends TextAreaProps {}

const CustomInput = ({ size = 'large', ...props }: ICustomInputProps) => {
  return <Input size={size} {...props} />;
};

const PasswordInput = ({ size = 'large', ...props }: ICustomInputProps) => (
  <Input.Password size={size} {...props} />
);
CustomInput.Password = PasswordInput;

const SearchInput = ({ className, ...props }: ICustomInputProps) => (
  <Input.Search className={'custom-search ' + className} {...props} />
);
CustomInput.Search = SearchInput;

const TextAreaInput = ({
  className,
  size = 'large',
  ...props
}: ICustomTextAreaProps) => (
  <Input.TextArea
    size={size}
    className={'custom-textarea ' + className}
    {...props}
  />
);
CustomInput.TextArea = TextAreaInput;

export default CustomInput;
