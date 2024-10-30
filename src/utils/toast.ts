import { notification } from 'antd';

export const toastSuccess = (content: string) => {
  notification.success({
    message: 'Succcess',
    description: content,
  });
};

export const toastError = (content: string) => {
  notification.error({
    message: 'Error',
    description: content,
  });
};

export const toastWarning = (content: string) => {
  notification.warning({
    message: 'Warning',
    description: content,
  });
};
