'use client';

import CustomButton from '@/components/custom/CustomButton';
import useStore from '@/store';
import React from 'react';

const Home = () => {
  const count = useStore((state) => state.count);
  const setCount = useStore((state) => state.setCount);

  return (
    <div className='flex flex-col items-center gap-[1rem] mt-[5rem]'>
      Hi, This is NextJS 14 Base Resource
      <div>{count}</div>
      <CustomButton
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </CustomButton>
    </div>
  );
};

export default React.memo(Home);
