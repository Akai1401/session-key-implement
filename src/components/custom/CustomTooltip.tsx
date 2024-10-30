import { Tooltip, TooltipProps } from 'antd';
import React from 'react';

const CustomTooltip = ({ ...props }: TooltipProps) => {
  return <Tooltip {...props}></Tooltip>;
};

export default CustomTooltip;
