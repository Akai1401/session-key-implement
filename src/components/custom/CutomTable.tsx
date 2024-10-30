import { ConfigProvider, Table, TableProps } from 'antd';
import React from 'react';

interface ICustomTable extends TableProps {}

const CustomTable = ({ className, ...props }: ICustomTable) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F26C4F',
          colorBorder: '#F26C4F',
        },
        components: {
          Table: {
            fontSize: 16,
            fontWeightStrong: 500,
          },
        },
      }}
    >
      <Table className={'table-custom ' + className} {...props} />
    </ConfigProvider>
  );
};

export default CustomTable;
