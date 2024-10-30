import { Progress, ProgressProps } from 'antd';
import React from 'react';

interface ICustomProgress extends ProgressProps {}

const CustomProgress = ({
  strokeColor = {
    '0%': '#93D95C',
    '61%': '#10AE62',
  },
  trailColor = '#ffffff',
  ...props
}: ICustomProgress) => {
  return (
    <Progress strokeColor={strokeColor} trailColor={trailColor} {...props} />
  );
};

export default CustomProgress;
