import { Drawer, DrawerProps } from 'antd';
import React from 'react';

interface ICustomDrawer extends DrawerProps {}

const CustomDrawer = ({
  children,
  width = 400,
  closable = false,
  ...props
}: ICustomDrawer) => {
  return (
    <Drawer closable={closable} width={width} {...props}>
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
