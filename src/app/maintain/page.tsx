'use client';

import useMounted from '@/hook/useMounted';
import { formatTimeUnit } from '@/utils';
import { useRouter } from 'next/navigation';
import React from 'react';
// import Countdown from 'react-countdown';

const Renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <div className='flex items-center gap-3 text-[#FFE794] font-medium'>
      <div className='flex flex-col items-center px-[16px] bg-tertiary rounded-lg pb-2'>
        <p className='text-[32px]'>{formatTimeUnit(days)}</p>
        <p className='font-medium'>Days</p>
      </div>
      <div className='flex flex-col items-center px-[16px] bg-tertiary rounded-lg pb-2'>
        <p className='text-[32px]'>{formatTimeUnit(hours)}</p>
        <p className='font-medium'>Hours</p>
      </div>
      <div className='flex flex-col items-center px-[16px] bg-tertiary rounded-lg pb-2'>
        <p className='text-[32px]'>{formatTimeUnit(minutes)}</p>
        <p className='font-medium'>Minutes</p>
      </div>
      <div className='flex flex-col items-center px-[16px] bg-tertiary rounded-lg pb-2'>
        <p className='text-[32px]'>{formatTimeUnit(seconds)}</p>
        <p className=''>Seconds</p>
      </div>
    </div>
  );
};

const Maintain = () => {
  const { isMounted } = useMounted();
  const router = useRouter();

  return (
    <div className='scale_layout w-full h-[var(--100vh)] max-sm:px-[16px] flex items-center justify-center bg-white bg-[url("/images/bg-loading.webp")] bg-cover bg-center flex-col gap-[0.5rem]'>
      <h4 className='text-[38px] mb-[1rem] sm:text-[48px] text-[#8F3A2D] font-[400] font-godOfWar'>
        Coming Soon
      </h4>
      {/* {isMounted && (
        <Countdown
          date={1722826800000}
          renderer={Renderer}
          onComplete={() => router.push('play')}
        />
      )} */}
    </div>
  );
};

export default Maintain;
