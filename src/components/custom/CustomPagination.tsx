import { Pagination, PaginationProps } from 'antd';
import React from 'react';

interface ICustomPaginationProps extends PaginationProps {}

const CustomPagination = ({ ...props }: ICustomPaginationProps) => {
  return <Pagination {...props} />;
};

export default CustomPagination;
