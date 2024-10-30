import { useRouter } from 'next/navigation';
import React from 'react';

interface ITab {
  tabData: { id: number; title: string }[];
  activeTab: number;
}

const Tab = ({ tabData, activeTab }: ITab) => {
  const router = useRouter();

  return (
    <div className={`font-[400] text-[24px] text-center grid-cols-2 grid`}>
      {tabData.map((item) => (
        <div
          key={item.id}
          className={`${activeTab === item.id && '!text-tertiary !border-tertiary'} font-godOfWar px-[5rem] text-[#C08F8F] border-b-[2px] border-[#ECC3C3] transition-all hover:text-tertiary py-[12px] cursor-pointer`}
          onClick={() => {
            router.push('?tab=' + item.title.toLowerCase());
          }}
        >
          <p className='active:translate-y-[8%]'>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Tab;
