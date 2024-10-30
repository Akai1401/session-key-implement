import { Form, FormItemProps, FormProps } from 'antd';
import React from 'react';

interface ICustomFormProps extends FormProps {
  children: React.ReactNode;
}
interface ICustomFormItemProps extends FormItemProps {
  children: React.ReactNode;
}

const CustomForm = ({ children, ...props }: ICustomFormProps) => {
  return <Form {...props}>{children}</Form>;
};

const FormItem = ({ children, ...props }: ICustomFormItemProps) => (
  <Form.Item {...props}>{children}</Form.Item>
);
CustomForm.Item = FormItem;

export default CustomForm;
