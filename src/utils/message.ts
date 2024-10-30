import { message } from 'antd';

export const messageSuccess = (content: string) => {
  message.success({
    content,
  });
};

export const messageError = (content: string) => {
  message.error({
    content,
  });
};

export const messageWarning = (content: string) => {
  message.warning({
    content,
  });
};
